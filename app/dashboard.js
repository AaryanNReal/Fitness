import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const bookings = [
  { id: '1', name: 'Rahul Sharma', time: '10:00 AM' },
  { id: '2', name: 'Pooja Mehta', time: '12:30 PM' },
  { id: '3', name: 'Arjun Reddy', time: '3:45 PM' },
];

export default function Dashboard() {
  const router = useRouter();

  // Track the theme mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    else if (hour < 18) return 'Good Afternoon';
    else return 'Good Evening';
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.greeting, isDarkMode ? styles.textLight : styles.textDark]}>
          {getGreeting()}, Ayush!
        </Text>
        <Ionicons name="notifications-outline" size={24} color={isDarkMode ? 'white' : 'black'} />
      </View>

      {/* Profile Status */}
      <Text style={[styles.status, isDarkMode ? styles.textLight : styles.textDark]}>
        Profile Status: ✅ Verified
      </Text>

      {/* Earnings */}
      <View style={styles.card}>
        <Text >Earnings This Week</Text>
        <Text >₹4,500</Text>
      </View>

      {/* Upcoming Slot */}
      <View style={styles.card}>
        <Text >Upcoming Slot</Text>
        <Text >
          {bookings[0].name} at {bookings[0].time}
        </Text>
      </View>

      {/* Bookings List */}
      <Text style={[styles.sectionTitle, isDarkMode ? styles.textLight : styles.textDark]}>
        Today's Bookings
      </Text>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text >
              {item.name} - {item.time}
            </Text>
          </View>
        )}
      />

      {/* Add New Slot Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/add-slot')}
      >
        <Text style={styles.addButtonText}>+ Add New Slot</Text>
      </TouchableOpacity>

      {/* Dark Mode Toggle Button */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleTheme}
      >
        <Ionicons
          name={isDarkMode ? 'sunny-outline' : 'moon-outline'}
          size={30}
          color={isDarkMode ? 'yellow' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  textLight: {
    color: 'white',
  },
  textDark: {
    color: 'black',
  },
  status: {
    marginTop: 16,
    fontSize: 16,
    color: 'gray',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  bookingItem: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  bookingText: {
    fontSize: 16,
    color: 'black',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 50,
    elevation: 5,
  },
});
