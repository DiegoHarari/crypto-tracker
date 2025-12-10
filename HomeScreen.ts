import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useCryptoPrices } from "../hooks/useCryptoPrices";
import PriceCard from "../components/PriceCard";
import { TokenPrice } from "../api/cryptoApi";

const HomeScreen: React.FC = () => {
  const { prices, loading, error, refetch } = useCryptoPrices(15000);

  const renderItem: ListRenderItem<TokenPrice> = ({ item }) => (
    <PriceCard
      name={item.name}
      symbol={item.symbol}
      priceUsd={item.priceUsd}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Crypto Prices</Text>
        <Text style={styles.subtitle}>BTC • ETH • SOL • LINK</Text>
      </View>

      {loading && prices.length === 0 ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#f97316" />
          <Text style={styles.loadingText}>Fetching latest prices…</Text>
        </View>
      ) : (
        <>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <FlatList
            data={prices}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            refreshControl={
              <RefreshControl
                tintColor="#f97316"
                refreshing={loading}
                onRefresh={() => {
                  void refetch();
                }}
              />
            }
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816"
  },
  header: {
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  title: {
    color: "#f9fafb",
    fontSize: 24,
    fontWeight: "700"
  },
  subtitle: {
    color: "#9ca3af",
    marginTop: 4
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    marginTop: 12,
    color: "#d1d5db"
  },
  errorText: {
    color: "#fca5a5",
    textAlign: "center",
    marginTop: 8
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16
  }
});
