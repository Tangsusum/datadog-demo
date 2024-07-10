import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SearchIcon from '../../assests/SearchIcon';

const items = [
    {title: "Sale on now! Up to 50% Off!", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://imgix.datadoghq.com/img/blog/pup-culture/datadog-career-pathing-engineering/career-path-eng-hero.png?w=1280&auto=format&q=80&fit=max&lossless=1&dpr=2'},
    {title: "What's new", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://imgix.datadoghq.com/img/blog/pup-culture/datadog-board-spotlight-financial-services/board-spotlight-hero.png?auto=format&fit=fill&w=720&h=444&dpr=2'},
]

function HomeScreen() {
    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, gap: 8 }}>
                <View style={{flexDirection: 'row', width: 365, height: 40, borderWidth: 2, borderColor: 'lightgray', borderRadius: 8, backgroundColor: 'white', padding: 8, alignItems: 'center', position: 'relative'}}>
                    <Text style={{color: 'gray', position: 'absolute', left: '40%'}}>Search Here</Text>
                    <SearchIcon color='#632ca6' />
                </View>
                {items.map((item, key) => <HomeCard key={key} title={item.title} description={item.description} image={item.img} />)}
            </View>
        </>

    );
}

const HomeCard = ({title, description, image}: {title: string, description: string, image: string}) => {
    return (
        <View style={{alignItems: 'center', flexDirection: 'column', width: 365,}}>
            <Image
                    style={{width: 365, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                    source={{
                    uri: image,
                    }}
                />
            <View style={{padding: 16, backgroundColor: 'white', borderBottomLeftRadius: 8,  borderBottomRightRadius: 8, flexDirection: 'column', gap: 8}}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <Text>{description}</Text>
                <TouchableOpacity>
                    <Text style={{alignSelf: 'flex-end', color: '#632ca6'}}>Learn More</Text>
                </TouchableOpacity>
            </View>
        </View>
    
    )
   
}

export default HomeScreen