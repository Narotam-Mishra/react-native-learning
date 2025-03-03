import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // function to validate form inputs
  const validateForm = () => {
    let errors = {};

    // username is required
    if(!username){
      errors.username = "Username is required";
    }

    // password is required
    if(!password){
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if(validateForm()){
      console.log(`Form submitted successfully with Username: ${username} and Password: ${password}`);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.form}> 
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {
          errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {
          errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
        }
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label : {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
