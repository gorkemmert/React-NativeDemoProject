import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Main')
  };

  const handleForgotPassword = () => {
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/logo.webp')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Kullanıcı Girişi</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={20} color="#0f1a96" style={styles.icon} />
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              placeholder="e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#C4C4C4"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#0f1a96" style={styles.icon} />
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              placeholder="şifre"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#C4C4C4"
            />
          </View>
        </View>

        <View style={styles.rememberMeContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <Text style={styles.rememberMeText}>Beni Hatırla</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Şifremi unuttum</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-20%',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    zIndex: 1, 
    
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  contentContainer: {
    height: 2*height/5,
    width: '90%',
    backgroundColor: '#718fd4',
    borderRadius: 20,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f1a96',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 15,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#D0D0D0',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#0f1a96',
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#4123fd',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 40, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3, 
    borderColor: '#5c63b7',
    marginLeft: 5,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
