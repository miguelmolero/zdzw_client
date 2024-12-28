import React, {useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ApplicationType } from "../types/aplication_types";
import { useGeneralStateContext } from "../context/GeneralStateContext";

const GeneralLayout: React.FC = () => {
    const location = useLocation();
    const {setApplicationType, applicationType} = useGeneralStateContext();

    useEffect(() => {
        //console.log("GeneralLayout: ", location.pathname);
        if (location.pathname){
            switch (location.pathname) {
                case "/entry-menu":
                    setApplicationType(ApplicationType.None);
                    break;
                case "/factory-metrics":
                    setApplicationType(ApplicationType.FactoryMetrics);
                    break;
                case "/inspection-visualizator":
                    setApplicationType(ApplicationType.InspectionVisualizator);
                    break;
                case "/inspection-analysis":
                    setApplicationType(ApplicationType.InspectionAnalysis);
                    break;
                case "/welding-process-quality":
                    setApplicationType(ApplicationType.WeldingProcessQuality);
                    break;
                default:
                    setApplicationType(ApplicationType.None);
                    break;
            }
        }
    }, [location.pathname, setApplicationType]);
    
    //console.log("GeneralLayout: ", applicationType);
    return <Outlet />;
}

export default GeneralLayout;