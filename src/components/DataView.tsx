import "./DataView.css";
import { Layout, APIData } from "../App";
import GridItem from "./GridItem";
import ListItem from "./ListItem";

type DataViewProps = {
    layout: Layout,
    data?: APIData[],
};

export type ItemProps = {
    name: string,
    height?: string,
    team: string,
    position?: string,
};

type ItemExtraDetailProps = {
    detail?: string
};

export function ItemExtraDetail({detail}: ItemExtraDetailProps){
    if(detail !== undefined) {
        return (
            <>
                <p className="grid-item-text-spacer" style={{marginLeft:8, marginRight:8}}>·</p>
                <p style={{color: "#8AACED"}}>{detail}</p>
            </>
        );
    }
    return null
}

function DataView({layout, data}: DataViewProps) {
    if (data !== undefined) {
        
        const gridItemList = <div className="data-view-grid">
            {
                data.map((element: APIData) => {
                    let props: ItemProps = {
                        name: element.first_name+" "+element.last_name,
                        height: (element.height_feet != null && element.height_inches != null)? element.height_feet+"'"+element.height_inches+'"':undefined,
                        team: element.team.name,
                        position: element.position,
                    };
            
                    return (
                        <GridItem 
                            {...props}/>
                    );
                })
            } </div>

        const listItemList = <div className="data-view-list"> {
            data.map((element: APIData) => {
                let props: ItemProps = {
                    name: element.first_name+" "+element.last_name,
                    height: (element.height_feet != null && element.height_inches != null)? element.height_feet+"'"+element.height_inches+'"':undefined,
                    team: element.team.name,
                    position: element.position,
                };
        
                return (
                    <ListItem 
                        {...props}/>
                );
            })
            } </div>;
       
        return (
            <main className="data-view" style={{marginTop: 20}}>
                {layout === Layout.Grid?
                    gridItemList:
                    listItemList}
            </main>
        );
    }

    return (
        <main>
            <p>Loading...</p>
        </main>
    );
}

export default DataView;