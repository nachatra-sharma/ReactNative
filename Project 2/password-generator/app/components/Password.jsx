import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as yup from "yup";
import { Formik } from "formik";

const Password = () => {
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [password, setPassword] = useState("");
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [passwordLength, setPasswordLength] = useState("");

  const generatePasswordString = (passwordLength) => {
    let characterList = "";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const numberChar = "1234567890";
    const symbolChar = "!@#$%^&";

    if (lowerCase) characterList += lowerCaseChar;
    if (upperCase) characterList += upperCaseChar;
    if (number) characterList += numberChar;
    if (symbol) characterList += symbolChar;

    const passwordResult = createPassword(characterList, passwordLength);
  };

  const createPassword = (characters, passwordLength) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    setIsPasswordGenerated(true);
    setPassword(result);
    return result;
  };

  const resetPasswordState = () => {
    setUpperCase(false);
    setNumber(false);
    setSymbol(false);
    setIsPasswordGenerated(false);
  };

  const passwordSchema = yup.object().shape({
    passwordLength: yup
      .number()
      .min(4, "Should be min of 4 character")
      .max(16, "Should be max of 16 character")
      .required("Password length is required field"),
  });

  return (
    <ScrollView keyboardShouldPersistTaps='handled' style={styles.container}>
      <StatusBar barStyle='light-content' />
      <SafeAreaView>
        <View>
          <Formik
            initialValues={{ passwordLength }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log(values);
              generatePasswordString(Number(values.passwordLength));
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleReset,
              handleChange,
              handleSubmit,
            }) => (
              <>
                <View style={styles.passLengthContainer}>
                  <View>
                    <Text style={styles.passwordLengthHeading}>
                      Password Length:
                    </Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.passwordLengthBox}
                    value={values.passwordLength}
                    onChangeText={handleChange("passwordLength")}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                  />
                </View>
                <View style={styles.radioInputBox}>
                  <Text style={styles.radioInputText}>Include Lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInText
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor='#feca57'
                  />
                </View>
                <View style={styles.radioInputBox}>
                  <Text style={styles.radioInputText}>Include Upper Case</Text>
                  <BouncyCheckbox
                    disableBuiltInText
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor='#ff9ff3'
                  />
                </View>
                <View style={styles.radioInputBox}>
                  <Text style={styles.radioInputText}>Include Symbol</Text>
                  <BouncyCheckbox
                    disableBuiltInText
                    isChecked={symbol}
                    onPress={() => setSymbol(!symbol)}
                    fillColor='#ff6b6b'
                  />
                </View>
                <View style={styles.radioInputBox}>
                  <Text style={styles.radioInputText}>Include Number</Text>
                  <BouncyCheckbox
                    disableBuiltInText
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor='#48dbfb'
                  />
                </View>
                <View style={styles.passwordGeneratorBtnContainer}>
                  <TouchableOpacity
                    style={[
                      styles.passwordGeneratorBtn,
                      styles.passwordGeneratorBtnColor1,
                    ]}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.passwordGeneratorText}>
                      Generate Password
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.passwordGeneratorBtn,
                      styles.passwordGeneratorBtnColor2,
                    ]}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.passwordGeneratorText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordBoxTitle}>Result:</Text>
            <Text style={styles.passwordBoxdescription}>
              Long Press to copy
            </Text>
            <Text style={styles.password} selectable={true}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  passwordLength: {
    fontSize: 17,
    color: "#c8d6e5",
  },
  passLengthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  passwordLengthHeading: {
    color: "#54a0ff",
    fontSize: 20,
  },
  passwordLengthBox: {
    backgroundColor: "#8395a7",
    paddingHorizontal: 30,
  },
  errorText: {
    fontSize: 13,
    color: "#ee5253",
  },
  radioInputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  radioInputText: {
    color: "#8395a7",
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordGeneratorBtnContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordGeneratorBtn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  passwordGeneratorBtnColor1: {
    backgroundColor: "#54a0ff",
  },
  passwordGeneratorBtnColor2: {
    backgroundColor: "#00d2d3",
  },
  passwordGeneratorText: {
    color: "#222f3e",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
  passwordContainer: {
    marginTop: 20,
    backgroundColor: "#c8d6e5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  passwordBoxTitle: {
    marginTop: 10,
    color: "#10ac84",
    fontSize: 19,
  },
  passwordBoxdescription: {
    color: "#ee5253",
  },
  password: {
    color: "#e67e22",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
});

export default Password;
