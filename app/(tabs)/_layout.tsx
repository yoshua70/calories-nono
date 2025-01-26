import { Colors } from '@/app-example/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
      <Tabs.Screen 
        name="(home)"
        options={{
          title: 'Home',
          tabBarIconStyle: styles.tabBarIcon,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>
        }}  />

      <Tabs.Screen 
        name="settings/index"
        options={{
          title: 'Settings',
          tabBarIconStyle: styles.tabBarIcon,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="gears" color={color}/>
        }}  />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
    margin: 12,
    borderRadius: 15,
    paddingTop: 15,
  },
  tabBarIcon: {
  },
});
