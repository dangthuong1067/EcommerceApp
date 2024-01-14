import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import IMAGES from '../../images/images'
import styles from './splashScreen.styles'
import { getBannersThunk, getCategoriesListThunk, getProductsThunk } from '../../redux/home/home.slice'
import { useDispatch, useSelector } from 'react-redux'
import { getTokenThunk } from '../../redux/auth/auth.slice'
import { setStack } from '../../redux/app/app.slice'

const SplashScreen = () => {
  const dispatch = useDispatch();
  // const { token } = useSelector(state => state.auth);
  //console.log('token', token);
  useEffect(() => {
    handleInitialLogic()
  }, [])

  const handleInitialLogic = async () => {
    const token = await dispatch(getTokenThunk()).unwrap();
    console.log('token handleInitialLogic', token);
    if (token) {
      await dispatch(getBannersThunk());
      await dispatch(getProductsThunk('sale'));
      await dispatch(getProductsThunk('popular'));

      await dispatch(getCategoriesListThunk());

      await dispatch(getProductsThunk('popular'));
      dispatch(setStack("protected"));
    }
    else {
      dispatch(setStack("auth"));
    }
  }
  return (
    <View style={styles.containerImage}>
      <Image source={IMAGES.logo}
        style={styles.image}
        resizeMode="cover" />
      <Text style={styles.appName}>Ecommerce App</Text>
    </View>
  )
}

export default SplashScreen