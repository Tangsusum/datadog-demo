import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import SuccessIcon from '../../assests/SuccessIcon';

function ProfileScreen() {
    const [modalProps, setModalProps] = React.useState({visible: false, title: '', desc: ''})

    const onDisableTracking = async () => {
        // On disable vexo analytics tracking button press
        setModalProps({visible: true, title: 'Success - Opt-out', desc: 'You have successfully opt-out of Vexo Analytics tracking'})
    }

    const onEnableTracking = async () => {
        // On enable vexo analytics tracking button press
        setModalProps({visible: true, title: 'Success - Opt-in', desc: 'You have successfully opt-in of Vexo Analytics tracking'})
    }

    return (
        <>
            <ConfirmationModal visible={modalProps.visible} onClosePress={() => setModalProps({...modalProps, visible: false})} title={modalProps.title} desc={modalProps.desc} />
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, gap: 8 }}>
                <View style={{padding: 32, backgroundColor: 'white', width: 365, alignItems: 'center', borderRadius: 8, gap: 8}}>
                    <Image
                        style={{width: 150, height: 150, borderRadius: 80}}
                        source={{
                        uri: 'https://datadog-careers.imgix.net/img/card-images/guilds/Bits_Amped.png?auto=format&h=160&fit=crop&dpr=2',
                        }}
                    />
                    <Text style={{fontWeight: 'bold'}}>User 1</Text>
                    <Text style={{color: 'gray'}}>Phone: +0012345678</Text>
                    <Text style={{color: 'gray'}}>Email: Lorem ipsum dolor sit amet</Text>
                    <Text style={{color: 'gray'}}>Address: Sed do eiusmod tempor incididunt</Text>
                </View>
                <TouchableOpacity onPress={onDisableTracking} style={{width: 365, backgroundColor: '#632ca6', padding: 16, borderRadius: 8, alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Disable Tracking</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onEnableTracking} style={{width: 365, backgroundColor: '#632ca6', padding: 16, borderRadius: 8, alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Enable Tracking</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const ConfirmationModal = ({onClosePress, visible, title, desc} : {onClosePress: () => void; visible: boolean; title: string; desc: string}) => {
    return (
        <Modal visible={visible} transparent>
            <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <View style={{backgroundColor: 'white', borderRadius: 8, padding: 16, width: 300, gap: 8}}>
                    <View style={{alignItems: 'center', gap: 8}}>
                        <SuccessIcon color='green' />
                        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{title}</Text>
                        <Text style={{textAlign: 'center'}}>{desc}</Text>
                    </View>
                    <TouchableOpacity onPress={onClosePress} style={{backgroundColor: '#632ca6', padding: 16, borderRadius: 8, alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ProfileScreen