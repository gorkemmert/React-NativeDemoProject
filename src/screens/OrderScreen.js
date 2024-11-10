import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data = [
  { id: '1', name: 'Ada Deniz Yumuş', amount: '574,00 ₺', status: 'Hazırlanıyor', brand: 'TRENDYOL', date: '10.09.2023' },
  { id: '2', name: 'Merve Dağtan', amount: '257,00 ₺', status: 'Yeni', brand: 'TRENDYOL', date: '12.09.2023' },
  { id: '3', name: 'Sevda Karaman Aziz', amount: '574,00 ₺', status: 'Tamamlandı', brand: 'TRENDYOL', date: '11.09.2023' },
  { id: '4', name: 'Mert Can Halıcı', amount: '574,00 ₺', status: 'İade', brand: 'TRENDYOL', date: '10.09.2023' },
];

export default function OrderScreen({setOrderCount}) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Tümü');
  const [selectedItems, setSelectedItems] = useState([]); 

  useEffect(() => {
    setOrderCount(selectedItems.length); 
    }, [selectedItems.length]);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const applyFilter = (filter) => {
    setSelectedFilter(filter);
    setFilterVisible(false);
  };

  const handleItemPress = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id)); 
    } else {
      setSelectedItems([...selectedItems, id]); 
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === data.length) {
      setSelectedItems([]); 
    } else {
      setSelectedItems(data.map(item => item.id)); 
    }
  };

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        selectedItems.includes(item.id) && styles.selectedCard,
      ]}
      onPress={() => handleItemPress(item.id)}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2MWXBBbo-nweuT_M1u1iXkjD7Gqu4pT8fJA&s' }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>{item.brand}</Text>
      <Text style={styles.details}>{item.date}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={toggleFilter}>
        <Text style={styles.filterText}>Filtrele ▾</Text>
      </TouchableOpacity>
      <Text style={styles.filterDescription}>Seçili: {selectedFilter}</Text>

      {filterVisible && (
        <View style={styles.filterOptions}>
          <TouchableOpacity onPress={() => applyFilter('Yeni')}>
            <Text style={styles.filterOptionText}>Yeni</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => applyFilter('Hazırlanıyor')}>
            <Text style={styles.filterOptionText}>Hazırlanıyor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => applyFilter('Tamamlandı')}>
            <Text style={styles.filterOptionText}>Tamamlandı</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => applyFilter('İade')}>
            <Text style={styles.filterOptionText}>İade</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => applyFilter('Tümü')}>
            <Text style={styles.filterOptionText}>Tümü</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.selectAllButton} onPress={handleSelectAll}>
        <Text style={styles.selectAllText}>
          {selectedItems.length === data.length ? 'Tümünü Kaldır' : 'Tümünü Seç'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 24,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: '5%',
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#d4d2fe',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: '5%',
  },
  filterText: {
    fontSize: 16,
    color: '',
  },
  filterDescription: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
    paddingLeft: 8,
  },
  filterOptions: {
    position: 'absolute',
    top: 60, 
    left: 0, 
    width: '100%', 
    backgroundColor: '#d4d2fe',
    padding: 10,
    borderRadius: 8,
    marginLeft: 20,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  filterOptionText: {
    color: '#5f5ea3',
    fontSize: 16,
    marginVertical: 5,
  },
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    paddingHorizontal: '5%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  selectedCard: {
    borderColor: '#32CD32',
    borderWidth: 2,
  },
  logoContainer: {
    position: 'absolute',
    top: 12,
    right: 20,
    width: 58,
    height: 58,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 58,
    height: 58,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5f5ea3',
  },
  details: {
    fontSize: 14,
    color: '#7d817e',
  },
  amountContainer: {
    marginTop: 'auto',
    alignSelf: 'flex-end',
  },
  amount: {
    fontSize: 16,
    color: '#32CD32',
    fontWeight: 'bold',
  },
  
  selectAllButton: {
    marginTop: 5,
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'flex-start',
  },
  selectAllText: {
    fontSize: 16,
    color: '#7d817e',
  },
});
