import React, { useEffect, useState } from "react";
import { View, AsyncStorage, TouchableOpacity, Text } from "react-native";
import numeral from "numeral";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-community/picker';
import { Entypo } from "@expo/vector-icons";

import theme from '../../themes/default';
import MortgageDetail from './MortgageDetail';
import MortgageSlider from './MortgageSlider';
import MortgageChart from './MortgageChart';
import { mortgageCalculator } from './mortgageCalculator';
import BottomModal from '../BottomModal/BottomModal';

import {
  PriceInput,
  ValueInput,
  PriceLabel,
  Container,
  InputContainer,
  ValueInputText,
  YearsContainer,
  ModalBody,
  ModalButton
} from './style';

interface DetailMortgageProps {
  price?: number;
  tax?: number;
}

const DetailMortgage: React.FC<DetailMortgageProps> = ({
  price = 350000,
  tax = 2000
}) => {
  const [years, setYears] = useState<number>(30);
  const [down, setDown] = useState<number>(20);
  const [rate, setRate] = useState<number>(4);
  const [mortgagePrice, setMortgagePrice] = useState(price);
  const [formatMortgagePrice, setFormatMortgagePrice] = useState(
    `$${numeral(mortgagePrice).format("0,0")}`
  );
  const [totalDown, setTotalDown] = useState(
    `$${numeral(mortgagePrice * (down / 100)).format("0,0")}`
  );
  const [updateYears, setUpdateYears] = useState<boolean>(false);

  const mortgage = mortgageCalculator(
    years,
    parseInt(mortgagePrice),
    down,
    rate,
    tax
  );

  useEffect(() => {
    let storedDown = 20;
    let storedRate = 4;
    let storedYears = 30;
    async function _async() {
      storedDown = await AsyncStorage.getItem("down");
      storedRate = await AsyncStorage.getItem("rate");
      storedYears = await AsyncStorage.getItem("years");
    }
    _async().then(() => {
      if (storedDown !== null) {
        setDown(parseInt(storedDown));
      }
      if (storedRate !== null) {
        setRate(parseFloat(storedRate));
      }
      if (storedYears !== null) {
        setYears(parseInt(storedYears));
      }
    });
  }, []);

  useEffect(() => {
    async function _async() {
      await AsyncStorage.setItem("down", down.toString());
    }
    const value = `$${numeral(mortgagePrice * (down / 100)).format("0,0")}`;
    setTotalDown(value);
    _async();
  }, [down, mortgagePrice]);

  const mortgageFormatting = (value) => {
    const format = numeral(value)._value;
    setMortgagePrice(format);
    setFormatMortgagePrice(`$${numeral(format).format("0,0")}`);
  };

  const downFormatting = (value) => {
    const format = numeral(value)._value;
    const percent = (format / mortgagePrice) * 100;
    setDown(percent);
  };

  const updateRate = async (value) => {
    await AsyncStorage.setItem("rate", value.toString());
    setRate(value);
  };

  const storeYears = async () => {
    await AsyncStorage.setItem("years", years.toString());
  };

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      keyboardShouldPersistTaps="handled"
    >
      <MortgageChart
        data={mortgage.chartData}
        value={`$${numeral(Math.ceil(mortgage.total * 100) / 100).format(
          "0,0"
        )}`}
        label="Monthly"
      />
      <MortgageDetail
        icon="ellipse"
        iconSize={15}
        iconColor="#94B1E5"
        value={`$${numeral(Math.ceil(mortgage.principle * 100) / 100).format(
          "0,0"
        )}`}
        label="Principal & Interset"
      />
      <MortgageDetail
        icon="ellipse"
        iconSize={15}
        iconColor="#BDCCE5"
        value={`$${numeral(Math.ceil(mortgage.taxes * 100) / 100).format(
          "0,0"
        )}`}
        label="Taxes"
      />
      {mortgage.pmi > 0 && (
        <MortgageDetail
          icon="ellipse"
          iconSize={15}
          iconColor="#C3C3C3"
          value={`$${numeral(Math.ceil(mortgage.pmi * 100) / 100).format(
            "0,0"
          )}`}
          label="Mortgage Insurance"
        />
      )}
      <Container>
        <PriceLabel flex={0.5}>Purchase Price</PriceLabel>
        <PriceInput
          value={formatMortgagePrice}
          onChangeText={(value) => mortgageFormatting(value)}
          contextMenuHidden={true}
          flex={0.5}
          keyboardType="numeric"
          returnKeyType={ 'done' } 
          blurOnSubmit={true}
        />
      </Container>
      <Container>
        <PriceLabel flex={0.5}>Loan Term</PriceLabel>
        <YearsContainer flex={0.5} onPress={() => setUpdateYears(!updateYears)}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontFamily: theme.fonts[400],
                fontSize: theme.fontSize.regular,
              }}
            >
              {years} years
            </Text>
            <Entypo
              name={updateYears ? 'chevron-thin-up' : 'chevron-thin-down'}
              size={16}
              color="black"
            />
          </View>
        </YearsContainer>
      </Container>
      <Container>
        <PriceLabel flex={0.53}>Down Payment</PriceLabel>
        <InputContainer flex={0.47}>
          <ValueInput
            value={totalDown}
            onChangeText={(value) => downFormatting(value)}
            contextMenuHidden={true}
            flex={0.65}
            first={true}
            keyboardType="numeric"
            returnKeyType={ 'done' } 
            blurOnSubmit={true}
          />
          <ValueInput
            value={(Math.ceil(down * 10) / 10).toString()}
            onChangeText={(value) => setDown(value)}
            contextMenuHidden={true}
            flex={0.25}
            right={true}
            keyboardType="numeric"
            returnKeyType={ 'done' } 
            blurOnSubmit={true}
          />
          <ValueInputText flex={0.1}>%</ValueInputText>
        </InputContainer>
      </Container>
      <MortgageSlider
        minValue={0}
        maxValue={50}
        value={Math.ceil(down * 10) / 10}
        label="%"
        showValue={false}
        action={setDown}
      />
      <Container>
        <PriceLabel flex={0.5}>Interest Rate</PriceLabel>
        <InputContainer>
          <ValueInput
            value={rate.toString()}
            onChangeText={(value) => updateRate(value.length > 0 ? value : 0)}
            contextMenuHidden={true}
            flex={0.9}
            minLength={1}
            keyboardType="numeric"
            returnKeyType={ 'done' } 
            blurOnSubmit={true}
          />
          <ValueInputText flex={0.1}>%</ValueInputText>
        </InputContainer>
      </Container>
      <MortgageSlider
        minValue={1}
        maxValue={8}
        step={0.01}
        value={rate}
        label="%"
        showValue={false}
        action={updateRate}
      />
      {
        updateYears && (
          <BottomModal modal={updateYears} blur={15}>
            <ModalBody>
              <ModalButton>
                <TouchableOpacity
                  onPress={() => {
                    setUpdateYears(false), storeYears();
                  }}
                >
                  <Text
                    style={{
                      color: theme.homeColors.blue[800],
                      fontSize: theme.fontSize.larger,
                      fontFamily: theme.fonts[700],
                    }}
                  >
                    Done
                  </Text>
                </TouchableOpacity>
              </ModalButton>
              <Picker
                selectedValue={years}
                itemStyle={{
                  fontSize: theme.fontSize.medium,
                  fontFamily: "Nunito_700Bold"
                }}
                onValueChange={async (itemValue, itemIndex) => setYears(itemValue)}
              >
                <Picker.Item label="10 Years" value={10} key={0} />
                <Picker.Item label="15 Years" value={15} key={0} />
                <Picker.Item label="20 Years" value={20} key={0} />
                <Picker.Item label="25 Years" value={25} key={0} />
                <Picker.Item label="30 Years" value={30} key={0} />
              </Picker>
              <Entypo name="chevron-thin-up" size={16} color="black" />
            </ModalBody>
          </BottomModal>

        )
      }
    </KeyboardAwareScrollView>
  );
};

export default DetailMortgage;
