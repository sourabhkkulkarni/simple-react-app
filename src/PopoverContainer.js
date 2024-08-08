import * as React from "react";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PopoverTooltip = styled(({ className, isColorLegend, ...props }) => (
    <Tooltip
        {...props}
        arrow
        classes={{ popper: className }}
        placement={"bottom-end"}
    />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const PopoverContainer = ({ setStageDataFromChild, stageId, stageStatus }) => {
    let message = 'from child';

    const action = [
        {
            Id: "Enable",
            label: "Enable",
        },
        {
            Id: "Disable",
            label: "Disable",
        },
    ];

    //   const handleTypographyClick = (m) =>{
    //     props.stageId = m;
    //   }


    return (
        <div className="variables-popover">
            <PopoverTooltip
                title={
                    <React.Fragment>
                        <Typography onClick={(e) => setStageDataFromChild({stageId,stageStatus})}>{stageStatus ? "Enable" : "Disable"}</Typography>
                    </React.Fragment>
                }
            >
                <MoreVertIcon />
            </PopoverTooltip>
        </div>
    );
}


export default PopoverContainer