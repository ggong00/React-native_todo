import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from 'react-native';
import Proptypes from 'prop-types';
import {images} from '../images';

const Icon = styled.Image`
  tint-color: ${({completed,theme})=>completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({type,onPressOut,id,completed})=>{


  const _onPressOut =()=>{
    onPressOut(id);
  }

  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} completed={completed}/>  
    </TouchableOpacity>
  )
};

//핸들러가 넘어오지 않더라도 오류발생하지 않도록 디폴트 처리함.
IconButton.defaultProps = {
  onPressOut:()=>{}
}

IconButton.proptypes = {
  type:Proptypes.oneOf(Object.values(images)).isRequired,
  onPressOut:Proptypes.func,
  id:Proptypes.string
}


export default IconButton;
