export const postConvertion = (req, res) => {
    res.json({ message: 'Todo ok'})
};

export const getConvertions = (req, res) => {
    try {
       res.json({ message: 'Todo ok'}) 
    } catch (error) {
        res.json({ message: 'Ha ocurrido un error obteniendo todas las conversiones', error})
    }
}