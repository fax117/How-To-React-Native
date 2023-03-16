import { StyleSheet, Text, View, FlatList } from "react-native";
import { Image } from "expo-image";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/MenuOption";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="grey" />
      </View>

      <View>
        <Image
          style={styles.carImage}
          source="../assets/images/car.png"
          contentFit="contain"
          transition={1000}
        />
      </View>

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      <FlatList data={menuOptions} renderItem={({ item }) => <MenuOption />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  carImage: {
    width: "100%",
  },
  controls: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
