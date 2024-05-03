import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Button,
} from "react-native"
import { currencyByRupee } from "../utils/constant"
import Card from "./Card"
function App() {
  const [currencySymbol, setCurrencySymbol] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [convertedValue, setConvertedValue] = useState("")

  function convertCurrency(currencyType, symbol) {
    let value = inputValue
    value *= currencyType
    value = parseFloat(value.toFixed(2))
    setConvertedValue(value)
    setCurrencySymbol(symbol)
  }

  function resetTheValue() {
    setConvertedValue("")
    setInputValue("")
  }

  return (
    <View>
      <Text style={styles.appHeadingText}>Currency Converter App</Text>
      <View style={styles.appContainer}>
        <Text style={styles.symbol}>₹</Text>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          style={styles.currencyConverterInputBox}
          placeholder='Enter a value'
          keyboardType='numeric'
          maxLength={14}
        />
      </View>

      <View style={styles.cardMainContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          renderItem={(item) => (
            <Pressable
              style={styles.cardContainer}
              onPress={() =>
                convertCurrency(item.item.value, item.item.symbol)
              }>
              <Card details={item} />
            </Pressable>
          )}
        />
      </View>
      <View style={styles.convertedValueContainer}>
        {convertedValue || convertedValue === 0.0 ? (
          <View>
            <Text style={styles.convertedValueText}>
              {`${convertedValue} ${currencySymbol}`}
            </Text>
            <View style={styles.appResetBtn}>
              <Button
                color='#596275'
                onPress={resetTheValue}
                title='Reset'
                x></Button>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appHeadingText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#222f3e",
    textAlign: "center",
  },
  currencyConverterInputBox: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    color: "black",
    fontSize: 18,
  },
  appContainer: {
    gap: 5,
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 20,
    marginLeft: 20,
    width: "89%",
    flexDirection: "row",
    backgroundColor: "#8395a7",
  },
  symbol: {
    fontSize: 18,
  },
  appBtn: {
    backgroundColor: "#576574",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  appBtnText: {
    color: "white",
    fontSize: 16,
    letterSpacing: 0.7,
  },
  appResetBtn: {
    marginTop: 20,
    paddingVertical: 20,
  },
  cardContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  cardMainContainer: {
    marginTop: 20,
  },
  convertedValueContainer: {
    width: "89%",
    marginVertical: 40,
    marginLeft: 20,
  },
  convertedValueText: {
    textAlign: "center",
    fontSize: 20,
    borderRadius: 4,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})

export default App
