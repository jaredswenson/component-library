import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

interface BottomModalProps {
  modal: boolean;
  blur?: number;
}

const BottomModal: React.FC<BottomModalProps>  = ({ children, modal, blur = 100 }) => {
  return (
    <Modal animationType="slide" visible={modal} transparent>
      <BlurView
        intensity={blur}
        tint="dark"
        style={[StyleSheet.absoluteFill, { backgroundColor: '#000' }]}
      >
        {children}
      </BlurView>
    </Modal>
  );
};

export default BottomModal;