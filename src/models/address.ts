
import mongoose from "mongoose"

// define Post interface
interface Address {
    IP: string,  
};

//extend mongoose document to include attributes of Todo interface

interface AddressDoc extends mongoose.Document {
    IP: string
}

// extend mongoose model to add build method 
interface AddressModel extends mongoose.Model<AddressDoc>{
    build(Attr: Address):AddressDoc
}


const addressSchema = new mongoose.Schema<AddressDoc>({
    IP: {type: String, required: true},
})

addressSchema.statics.build = (attr:Address) => {
    return new Address(attr);
};

const Address = mongoose.model<AddressDoc, AddressModel>('Address', addressSchema);

export default Address;

