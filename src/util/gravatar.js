 //es un algoritmo criptografico
import md5 from 'md5'

const gravatar =(email)=>{

    const base ="https://gravatar.com/avatar/"
    const formattedEmail=(email).trim().toLowerCase();
    const hast =md5(formattedEmail, {encoding:"binary"})
    return `${base}${hast}`
    
};

export default gravatar;