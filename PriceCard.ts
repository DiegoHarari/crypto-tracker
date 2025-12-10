import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type PriceCardProps = {
  name: string;
  symbol: string;
  priceUsd: number;
};

function formatUsd(price: number): string {
  if (price === 0) return "$0.00";
  if (price > 1000) {
    return (
      "$" +
      price.toLocaleString(undefined, {
        maximumFractionDigits: 2
      })
    );
  }
  return "$" + price.toFixed(2);
}

const PriceCard: React.FC<PriceCardProps> = ({
  name,
  symbol,
  priceUsd
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.price}>{formatUsd(priceUsd)}</Text>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#15132b",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  left: {
    flexDirection: "column"
  },
  symbol: {
    color: "#f97316",
    fontWeight: "bold",
    fontSize: 18
  },
  name: {
    color: "#e5e7eb",
    fontSize: 13,
    marginTop: 2
  },
  price: {
    color: "#a5b4fc",
    fontSize: 18,
    fontWeight: "600"
  }
});
