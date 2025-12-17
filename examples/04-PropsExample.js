// Example 4: Props and Component Communication
// Demonstrates passing data between components

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ===========================
// CHILD COMPONENTS
// ===========================

// Example 1: Simple Props
function WelcomeCard({ name, role }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Welcome, {name}!</Text>
      <Text style={styles.cardSubtitle}>Role: {role}</Text>
    </View>
  );
}

// Example 2: Props with Default Values
function ProfileCard({
  name = 'Guest User',
  email,
  age,
  bio = 'No bio provided',
}) {
  return (
    <View style={styles.profileCard}>
      <Text style={styles.profileName}>{name}</Text>
      {email && <Text style={styles.profileDetail}>📧 {email}</Text>}
      {age && <Text style={styles.profileDetail}>🎂 {age} years old</Text>}
      <Text style={styles.profileBio}>{bio}</Text>
    </View>
  );
}

// Example 3: Props with Functions (Callbacks)
function CounterButton({ count, onIncrement, onDecrement, color = '#007AFF' }) {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        style={[styles.counterBtn, { backgroundColor: color }]}
        onPress={onDecrement}
      >
        <Text style={styles.counterBtnText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterValue}>{count}</Text>

      <TouchableOpacity
        style={[styles.counterBtn, { backgroundColor: color }]}
        onPress={onIncrement}
      >
        <Text style={styles.counterBtnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// Example 4: Complex Props (Objects and Arrays)
function ProductCard({ product, onAddToCart }) {
  return (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      <View style={styles.productTags}>
        {product.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.addToCartBtn}
        onPress={() => onAddToCart(product)}
      >
        <Ionicons name="cart" size={20} color="#fff" />
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

// Example 5: Props Destructuring
function UserAvatar({ user: { name, avatar, online } }) {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        {online && <View style={styles.onlineDot} />}
      </View>
      <Text style={styles.avatarName}>{name}</Text>
    </View>
  );
}

// ===========================
// MAIN APP COMPONENT
// ===========================

export default function PropsExample() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('John Doe');
  const [cartItems, setCartItems] = useState([]);

  // Sample product data
  const product = {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'Premium noise-cancelling headphones',
    tags: ['Electronics', 'Audio', 'Wireless'],
  };

  // Sample user data
  const user = {
    name: 'Alice Johnson',
    avatar: 'AJ',
    online: true,
  };

  // Callback function example
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>Props Examples</Text>

        {/* Example 1: Simple Props */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Simple Props</Text>
          <WelcomeCard name="Sarah" role="Developer" />
          <WelcomeCard name="Mike" role="Designer" />
        </View>

        {/* Example 2: Default Props */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Default Values</Text>
          <ProfileCard
            name="John Smith"
            email="john@example.com"
            age={28}
            bio="Full-stack developer passionate about mobile apps"
          />
          <ProfileCard email="guest@example.com" />
        </View>

        {/* Example 3: Function Props (Callbacks) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Function Props</Text>
          <CounterButton
            count={count}
            onIncrement={() => setCount(count + 1)}
            onDecrement={() => setCount(count - 1)}
            color="#34C759"
          />
        </View>

        {/* Example 4: Complex Props */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Complex Props (Objects)</Text>
          <ProductCard product={product} onAddToCart={handleAddToCart} />
          <Text style={styles.cartCount}>
            Cart Items: {cartItems.length}
          </Text>
        </View>

        {/* Example 5: Destructured Props */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Destructured Props</Text>
          <UserAvatar user={user} />
        </View>

        {/* Interactive Example */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Interactive Props</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={userName}
            onChangeText={setUserName}
          />
          <WelcomeCard name={userName} role="Student" />
        </View>

        {/* Call by Value vs Reference Demo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            7. Call by Value vs Reference
          </Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeComment}>
              // Primitives (Value) - number, string, boolean
            </Text>
            <Text style={styles.codeText}>
              let x = 5;{'\n'}
              let y = x; // y gets COPY{'\n'}
              y = 10; // x is still 5
            </Text>

            <Text style={styles.codeComment}>
              {'\n'}// Objects (Reference)
            </Text>
            <Text style={styles.codeText}>
              let obj1 = {'{'}name: 'John'{'}'};{'\n'}
              let obj2 = obj1; // REFERENCE{'\n'}
              obj2.name = 'Jane'; // obj1.name also changes!
            </Text>

            <Text style={styles.codeComment}>
              {'\n'}// React Best Practice: Immutable Updates
            </Text>
            <Text style={styles.codeText}>
              setUser({'{'}...user, name: 'New'{'}'}); // New object
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ===========================
// STYLES
// ===========================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#007AFF',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
  },
  counterBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBtnText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 30,
    color: '#333',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34C759',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  productTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 12,
    color: '#34C759',
  },
  addToCartBtn: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  cartCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34C759',
    marginTop: 10,
    textAlign: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  onlineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#34C759',
    position: 'absolute',
    bottom: 5,
    right: 5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  codeBlock: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 8,
  },
  codeComment: {
    color: '#6A9955',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 5,
  },
  codeText: {
    color: '#D4D4D4',
    fontSize: 12,
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});

// Key Concepts Demonstrated:
// 1. Simple props passing
// 2. Default prop values
// 3. Function props (callbacks)
// 4. Complex props (objects, arrays)
// 5. Props destructuring
// 6. Prop types (strings, numbers, booleans, functions, objects)
// 7. Parent-to-child communication
// 8. Child-to-parent communication (callbacks)
// 9. Call by value vs call by reference
// 10. Immutable state updates

// Teaching Points:
// - Props are READ-ONLY (immutable)
// - Data flows DOWN from parent to child
// - Functions flow UP from child to parent (callbacks)
// - Always create NEW objects/arrays when updating state
// - Use destructuring for cleaner code
