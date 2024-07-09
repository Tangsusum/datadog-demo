import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const items = [
    {title: 'Item 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://datadog-careers.imgix.net/img/card-images/guilds/Bits_Women.png?auto=format&h=160&fit=crop&dpr=2'},
    {title: 'Item 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://datadog-careers.imgix.net/img/card-images/guilds/Bits_Veterans.png?auto=format&h=160&fit=crop&dpr=2'},
    {title: 'Item 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://datadog-careers.imgix.net/img/card-images/guilds/Bits_Latinx.png?auto=format&h=160&fit=crop&dpr=2'}
]

function CheckoutScreen() {

    const onCheckout = () => {}

    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, gap: 8 }}>
                {items.map((item, key) => <ItemCard key={key} title={item.title} description={item.description} image={item.img} />)}
                <TouchableOpacity style={{backgroundColor: 'purple', padding: 16, borderRadius: 8}} onPress={onCheckout}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Checkout</Text>
                </TouchableOpacity>
            </View>
        
        </>

    );
}

const ItemCard = ({title, description, image}: {title: string, description: string, image: string}) => {
    return (
        <View style={{padding: 16, backgroundColor: 'white', borderRadius: 8, flexDirection: 'row', gap: 8, alignItems: 'center'}}>
            <View style={{flex: 1, gap: 8}}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <Text>{description}</Text>
                <Text style={{color: 'grey'}}>Quantity: 1</Text>
            </View>
            <Image
                style={{width: 100, height: 100, borderRadius: 8}}
                source={{
                uri: image,
                }}
            />
        </View>
    )
   
}

export default CheckoutScreen