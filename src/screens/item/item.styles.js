import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    marginLeft: 15
  },
  discount: {
    width: 50,
    height: 60,
    backgroundColor: '#21804b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "absolute",
    right: 10
  },
  textDiscount: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    marginTop: 10
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  price: {
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'line-through'
  },
  reducedPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ce4547',
  },
  capacity: {
    fontSize: 18
  },
  priceAndAddCart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

  },
  addCart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#489969',
    marginLeft: 10
  },
  textAdd: {
    color: 'white',
    fontSize: 25,
  },
  percent: {
    fontSize: 17
  }
})

export default styles