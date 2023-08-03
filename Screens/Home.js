import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getAllYTData} from "../redux/action/YTdata-Action";
import { getYTMusicData } from '../redux/action/YTMusicDataAction';

export default function Home() {

    const dispatch = useDispatch();

    const {homeMusicVideo} = useSelector((state)=>state.ytDataReducer);
    console.log("homeMusicVideo",homeMusicVideo)

    const {musicData}= useSelector((state)=> state.ytmusicReducer);
    console.log("Home Music data ",musicData)

  useEffect(()=>{
    dispatch(getAllYTData())
    dispatch(getYTMusicData())
  },[])

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  