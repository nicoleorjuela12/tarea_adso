import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import {images} from '../../constants'
import { useState } from 'react'

const SignIn= () => {

  const [form, setForm] = useState({

    email:'',
    password:''

  })
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"/>

          <Text  className="text-2xl text-white text-semibold mt-10 font-psemibold">Long in to 
          Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handChangeText={(e) => setForm ({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"

          />

          <FormField
            title="Password"
            value={form.password}
            handChangeText={(e) => setForm ({ ...form, password: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

