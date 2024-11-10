import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';

const CustomSwitch = ({ initialValue = false }) => {
    const [isEnabled, setIsEnabled] = useState(initialValue);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Switch
            trackColor={{ false: '#767577', true: '#6841f2' }}
            thumbColor={isEnabled ? '#a39ad3' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
        />
    );
};

const styles = StyleSheet.create({
    switch: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    },
});

export default CustomSwitch;