import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import IMAGES from '../../images/images';
import styles from './carousel.styles';

const Carousel = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);
    const screenWidth = Dimensions.get('window').width;


    const handleScroll = (event) => {
        const slideWidth = screenWidth;
        const newIndex = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
        setActiveIndex(newIndex);
    };

    const renderItem = (item) => (
        <View
            key={item.id}
            style={{
                width: screenWidth,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ececec',
            }}
        >
            <Image
                source={item.image}
                style={{ width: screenWidth, height: 170, resizeMode: 'contain' }}
            />
        </View>
    );

    const scrollToIndex = (index) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: screenWidth * index, animated: true });
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (activeIndex + 1) % data.length;
            setActiveIndex(nextIndex);
            scrollToIndex(nextIndex);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [activeIndex, data.length]);
    return (
        <View>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={200}
            >
                {data.map((item) => renderItem(item))}
            </ScrollView>

            <View style={styles.dotButton}>
                {data.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            setActiveIndex(index);
                            scrollToIndex(index);
                        }}
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 5,
                            backgroundColor: index === activeIndex ? '#f5760e' : 'gray',
                            marginHorizontal: 5,
                        }}
                    />
                ))}
            </View>
        </View>

    )
}

export default Carousel