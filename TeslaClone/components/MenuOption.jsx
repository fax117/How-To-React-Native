export default function menuOption() {
  return (
    <View style={styles.optionRow}>
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
      <Text style={styles.optionText}>{item.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
}
