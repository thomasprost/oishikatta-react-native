const suica = '#FF4E4F'
const darkSuica = '#FF3E3E'
const darkBlue = '#1076BA'
const lightBlue = '#89D5F6'
const midBlue = '#5BA3D3'
const greyBlue = "#2f3f46"
const darkGreyBlue = "#1B2C33"

export default {
    suica,
    darkSuica,
    darkBlue,
    lightBlue,
    midBlue,
    greyBlue, 
    darkGreyBlue,
    container: {
        padding: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F4FDFF'
    },
    recipeList: {
        marginTop: 14,
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row'
    },
    recipeRow: {
        // flex: 1,
        margin: 5,
        width: '46%', 
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding:3,
        borderRadius: 3
    },
    recipeAllTitle: {
        // paddingLeft: 10,
        flex:1,
        // width: '100%',
        fontSize: 15, 
    },
    recipeAllImage: {
        width: '100%',
        height: 100,
        // flex: 1
    }
    
}