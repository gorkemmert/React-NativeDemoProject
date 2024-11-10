import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const HomeScreen = () => {
  // Fake data
  const monthlyAverageSales = '90,585 ₺';
  const dailyAverageSales = '3,528 ₺';
  const averageInvoiceCount = '3 Adet';
  const todayRevenue = '2,574 ₺';
  const totalExpenses = '0.00 ₺';
  const monthlyTotalSales = '...';
  const monthlyTotalPurchases = '...';

 
  const chartData = {
    datasets: [
      {
        data: [20, 85, 70, 90, 85, 95, 85, 80, 90, 95, 100, 90],
        color: (opacity = 1) => `rgba(127, 127, 191, ${opacity})`, 
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(127, 127, 191, ${opacity})`, 
  };


  const cardSize = (Dimensions.get('window').width - 64) / 2; 

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#7f7fbf" style={styles.searchIcon} />
        <TextInput
          placeholder="Ara"
          placeholderTextColor="#7f7fbf"
          style={styles.searchInput}
        />
      </View>

     
      <View style={[styles.card, styles.monthlyAverageContainer]}>
        <View style={styles.row}>
          <Text style={styles.title}>Aylık Ortalama Satış</Text>
          <Text style={styles.value}>{monthlyAverageSales}</Text>
        </View>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width - 14} 
          height={100}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 8,
          }}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withInnerLines={false} 
          withOuterLines={false} 
        />
      </View>

      
      <View style={styles.row}>
        <View style={[styles.card, { width: cardSize, height: cardSize, marginRight: 8 }]}>
          <Text style={styles.cardTitle}>Günlük Ortalama Satış</Text>
          <Progress.Circle
            size={80}
            progress={0.3} 
            showsText={true}
            formatText={() => '3,528 ₺'}
            color="#7f7fbf"
            unfilledColor="#E0E0E0"
            thickness={8}
            textStyle={styles.progressText}
          />
        </View>
        <View style={[styles.card, { width: cardSize, height: cardSize }]}>
          <Text style={styles.cardTitle}>Ortalama Fatura Adedi</Text>
          <Text style={styles.cardValue}>{averageInvoiceCount}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.card, { width: cardSize, height: cardSize, marginRight: 8 }]}>
          <Text style={styles.cardTitle}>Bugünkü Ciro</Text>
          <Text style={styles.cardValue}>{todayRevenue}</Text>
        </View>
        <View style={[styles.card, { width: cardSize, height: cardSize }]}>
          <Text style={styles.cardTitle}>Toplam Gider</Text>
          <Text style={styles.cardValue}>{totalExpenses}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.card, { width: cardSize, height: cardSize, marginRight: 8 }]}>
          <Text style={styles.cardTitle}>Aylık Toplam Satış</Text>
          <Text style={styles.cardValue}>{monthlyTotalSales}</Text>
        </View>
        <View style={[styles.card, { width: cardSize, height: cardSize }]}>
          <Text style={styles.cardTitle}>Aylık Toplam Alış</Text>
          <Text style={styles.cardValue}>{monthlyTotalPurchases}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop:24,
    padding: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d4d2fe',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#7f7fbf',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthlyAverageContainer: {
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7f7fbf',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7f7fbf',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7f7fbf',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7f7fbf',
    textAlign: 'center',
  },
  progressText: {
    color: '#7f7fbf',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
