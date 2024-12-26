export const settingsColumStyles = () => ({
    container: {
        flex: '0 0 250px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderLeft: '1px solid #ccc',
        boxSizing: 'border-box'
    },

    accordion: {
        width: '100%', // Ensure accordion doesn't exceed the width of its parent
        boxSizing: 'border-box', // Include padding/borders in width calculation
        margin: 0, // Remove any default margin
        padding: 0, // Ensure padding doesn't cause overflow
    }
});