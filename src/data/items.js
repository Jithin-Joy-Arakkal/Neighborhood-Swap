import ChoppingBoardImg from '../assets/Chopping_Board.jpg';
import CoffeeTableImg from '../assets/Coffee_Table.jpg';
import CeilingFanImg from '../assets/Ceiling_fan.jpg';
import MixerGrinderImg from '../assets/Mixer_Grinder.jpg';
import BedsideTableImg from '../assets/Bedside_Table.jpg';
import AlarmClockImg from '../assets/Alarm_Clock.jpg';

const initialItems = [
    {
        id : 1,
        name : "Chopping Board",
        description : `Built from premium, solid wood, this cutting board is designed to withstand years of daily kitchen use. Its sturdy construction ensures it can handle heavy chopping, slicing, and dicing without warping, cracking, or breaking.`,
        category : "Kitchen Essentials",
        type : "Sell",
        image : ChoppingBoardImg
    },
    {
        id : 2,
        name : "Coffee Table",
        description : `Made of the finest quality engineered wood and robust particle board with a 15mm thickness, it is built to last and withstand the rigors of daily use. It features: 1 surface top and 2 shelves, offering ample storage space and a total load capacity of 35 kg`,
        category : "Furniture",
        type : "Swap",
        image : CoffeeTableImg
    },
    {
        id : 3,
        name : "Ceiling Fan",
        description : `1200 mm; Colour: Brown; Power: 52 Watts; RPM: 390
        Low Power Consumption fan designed to save on your electricity bill. High speed ceiling fan with new shades and ribbed blades for enhancing aesthetics.`,
        category : "Electronics",
        type : "Swap",
        image : CeilingFanImg
    },
    {
        id : 4,
        name : "Mixer Grinder",
        description : `Mixer Grinder Powered by 75 W Heavy Duty Motor
Customized 5 Jars for different grinding operations
Grind & Store Jar for Instant Fresh Grinding & Storage
1.5 Ltr Juicer Jar for dual operation - as Juicer & Bender`,
        category : "Kitchen Essentials",
        type : "Sell",
        image : MixerGrinderImg
    },
    {
        id : 5,
        name : "Bedside Table",
        description : `Ideal Bedside Table for Bedroom. This compact wooden bedside table is perfect for everyday use beside the bed. A practical bed side table for bedroom that fits modern homes.`,
        category : "Furniture",
        type : "Swap",
        image : BedsideTableImg
    },
    {
        id : 6,
        name : "Alarm Clock",
        description : `Large, High-Contrast Display
Smart Night Light Technology
Gradual Alarm & Easy Snooze
Cordless & Travel-Ready
Sleek Modern Aesthetic`,
        category : "Bedroom Items",
        type : "Sell",
        image : AlarmClockImg
    }
];

export default initialItems;