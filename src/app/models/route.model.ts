import {Deserializable} from './deserializable.model';

export class Route implements Deserializable{

    public source : String;
    public destination : String;
    public sourceTiming : String;
    public destinationTiming :String;
    
    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
