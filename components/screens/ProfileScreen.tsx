import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function ProfileScreen() {
    const onUnsubscribe = () => {}

    const onOptOut = () => {}

    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, gap: 8 }}>
                <View style={{padding: 32, backgroundColor: 'white', width: 365, alignItems: 'center', borderRadius: 8, gap: 8}}>
                    <Image
                        style={{width: 150, height: 150, borderRadius: 80}}
                        source={{
                        uri: 'https://datadog-careers.imgix.net/img/card-images/guilds/Bits_Amped.png?auto=format&h=160&fit=crop&dpr=2',
                        }}
                    />
                    <Text style={{fontWeight: 'bold'}}>User 1</Text>
                    <Text style={{color: 'gray'}}>Email: Lorem ipsum dolor sit amet</Text>
                    <Text style={{color: 'gray'}}>Address: Sed do eiusmod tempor incididunt</Text>
                </View>
                <TouchableOpacity onPress={onUnsubscribe} style={{width: 365, backgroundColor: '#632ca6', padding: 16, borderRadius: 8, alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Unsubscribe</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onOptOut} style={{width: 365, backgroundColor: '#632ca6', padding: 16, borderRadius: 8, alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Opt-Out</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default ProfileScreen