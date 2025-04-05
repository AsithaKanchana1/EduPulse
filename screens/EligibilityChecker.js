// screens/EligibilityChecker.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';

// Subject Calculation Methods
const calculateEligibility = (courseCode, inputs) => {
    switch (courseCode) {
        case 'AGM3263':
            return (inputs.PR * 0.6 + inputs.RJ * 0.4) >= 40;
        case 'EEI3262':
            return (inputs.B_CAT_OQ * 0.4 + inputs.AVG_LAB * 0.6) >= 40;
        case 'EEI3269':
            return (inputs.B_CAT_OQ * 0.3 + inputs.AVG_DC * 0.4 + inputs.LAB * 0.3) >= 40;
        case 'EEI3346':
            return (inputs.MP * 0.5 + inputs.AVG_LAB * 0.5) >= 40;
        case 'EEI3372':
            return (inputs.TMA * 0.1 + inputs.AVG_LAB * 0.4 + inputs.B_OQ * 0.2 + inputs.MP * 0.3) >= 40;
        case 'EEI4346':
            return (inputs.B_CAT * 0.5 + inputs.AVG_LABT * 0.5) >= 40;
        case 'EEM3366':
            return (inputs.AVG_TMA * 0.2 + inputs.AVG_CAT * 0.4 + inputs.MP * 0.4) >= 40;
        case 'EEX3373':
            return (6 * inputs.AVG_CAT_LAB_TMA) >= 40;
        case 'EEX3467':
            return (inputs.B_CAT_OQ * 0.2 + inputs.MP * 0.3 + inputs.LAB_EV * 0.3 + inputs.TMA * 0.2) >= 40;
        case 'MHZ3459':
            return inputs.score >= 40;
        default:
            return false;
    }
};

const inputFields = {
    AGM3263: ['PR', 'RJ'],
    EEI3262: ['B_CAT_OQ', 'AVG_LAB'],
    EEI3269: ['B_CAT_OQ', 'AVG_DC', 'LAB'],
    EEI3346: ['MP', 'AVG_LAB'],
    EEI3372: ['TMA', 'AVG_LAB', 'B_OQ', 'MP'],
    EEI4346: ['B_CAT', 'AVG_LABT'],
    EEM3366: ['AVG_TMA', 'AVG_CAT', 'MP'],
    EEX3373: ['AVG_CAT_LAB_TMA'],
    EEX3467: ['B_CAT_OQ', 'MP', 'LAB_EV', 'TMA'],
    MHZ3459: ['score'],
};

// Component
const EligibilityChecker = () => {
    const [courseCode, setCourseCode] = useState('');
    const [inputs, setInputs] = useState({});
    const [eligibility, setEligibility] = useState(null);

    const handleInputChange = (field, value) => {
        setInputs({ ...inputs, [field]: parseFloat(value) });
    };

    const checkEligibility = () => {
        const result = calculateEligibility(courseCode, inputs);
        setEligibility(result);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eligibility Checker</Text>

            <Picker
                selectedValue={courseCode}
                onValueChange={(value) => setCourseCode(value)}
                style={styles.picker}
            >
                <Picker.Item label="Select a Course" value="" />
                <Picker.Item label="AGM3263 - Communication Skills" value="AGM3263" />
                <Picker.Item label="EEI3262 - Intro to OOP" value="EEI3262" />
                <Picker.Item label="EEI3269 - Mobile App Dev" value="EEI3269" />
                <Picker.Item label="EEI3346 - Web App Dev" value="EEI3346" />
                <Picker.Item label="EEI3372 - Python Programming" value="EEI3372" />
                <Picker.Item label="EEI4346 - Web Technology" value="EEI4346" />
                <Picker.Item label="EEM3366 - Business Studies" value="EEM3366" />
                <Picker.Item label="EEX3373 - Communication & Comp Tech" value="EEX3373" />
                <Picker.Item label="EEX3467 - Software Eng Concepts" value="EEX3467" />
                <Picker.Item label="MHZ3459 - Basic Math for Computing" value="MHZ3459" />
            </Picker>

            <Text style={styles.subtitle}>Enter Inputs:</Text>
            {courseCode && inputFields[courseCode]?.map((field) => (
                <TextInput
                    key={field}
                    placeholder={`Enter ${field}`}
                    keyboardType="numeric"
                    onChangeText={(value) => handleInputChange(field, value)}
                    style={styles.input}
                />
            ))}

            <Button title="Check Eligibility" onPress={checkEligibility} />

            {eligibility !== null && (
                <Text
                    style={[
                        styles.result,
                        { color: eligibility ? 'green' : 'red' },
                    ]}
                >
                    {eligibility ? 'Eligible to sit for the exam!' : 'Not Eligible to sit for the exam.'}
                </Text>
            )}

            <View style={styles.iconContainer}>
                <FontAwesome
                    name="github"
                    size={30}
                    color="black"
                    onPress={() => Linking.openURL('https://github.com/AsithaKanchana1')}
                    style={styles.icon}
                />
                <FontAwesome
                    name="coffee"
                    size={30}
                    color="black"
                    onPress={() => Linking.openURL('https://buymeacoffee.com/asitha')}
                    style={styles.icon}
                />
                <FontAwesome
                    name="linkedin"
                    size={30}
                    color="black"
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/asitha-kanchana-35aa531a8/')}
                    style={styles.icon}
                />
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        flex: 1,
    },
    title: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red',
        textAlign: 'center',
    },
    picker: {
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 18,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 70,
    },
    icon: {
        padding: 10,
    },
});

export default EligibilityChecker;
