import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const BlogCard = () => {
  function openWebsite(url) {
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.blogCardHeading}>Blog Card</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>What is JavaScript ??</Text>
        <Image
          source={{
            uri: "https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript-1024x576.jpg",
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardDescription} numberOfLines={3}>
          JavaScript, often abbreviated as JS, is a programming language and
          core technology of the Web, alongside HTML and CSS. 99% of websites
          use JavaScript on the client side for webpage behavior. Web browsers
          have a dedicated JavaScript engine that executes the client code
        </Text>
        <View style={styles.cardBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              openWebsite("https://en.wikipedia.org/wiki/JavaScript")
            }>
            <Text style={styles.btnText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openWebsite("https://github.com/nachatra-sharma")}>
            <Text style={styles.btnText}>Follow Me On Github</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  blogCardHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  cardTitle: {
    color: "white",
    fontSize: 17,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardImage: {
    objectFit: "contain",
    height: 230,
    width: "100%",
  },
  cardContainer: {
    marginTop: 10,
    backgroundColor: "#4b4b4b",
  },
  cardDescription: {
    marginTop: 10,
    paddingHorizontal: 10,
    textAlign: "justify",
    color: "#f1f2f6",
    letterSpacing: 1,
  },
  cardBtn: {
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#a4b0be",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  btnText: {
    color: "#2f3542",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default BlogCard;
