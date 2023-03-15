import { ArgumentAxis, Chart, ScatterSeries, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import { Abc } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";

const data = [
    { x: 1, y: 2 },
    { x: 1.2, y: 3 },
    { x: 1.3, y: 5 },
    { x: 1.7, y: 4 },
    { x: 1.9, y: 1 },
    { x: 2, y: 2 },
    { x: 2.3, y: 4 },
    { x: 2.6, y: 3 },
    { x: 2.9, y: 3 },
    { x: 3.2, y: 1 },
    { x: 3.5, y: 5 },
    { x: 3.8, y: 4 },
    { x: 4, y: 5 },
    { x: 4.2, y: 3 },
    { x: 4.4, y: 1 },
];

export const ChartInTooltip = () => {
    <Tooltip
        title={
            <Box sx={{ display: "flex" }}>
                <Typography
                    sx={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                    }}
                >
                    Y LABEL
                </Typography>
                <Box sx={{ minWidth: 250 }}>
                    <Chart data={data}>
                        <ArgumentAxis />
                        <ValueAxis />
                        <ScatterSeries valueField="y" argumentField="x" />
                    </Chart>
                    <Box
                        sx={{
                            minWidth: 250,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{ alignItems: "center" }}>X LABEL</Typography>
                    </Box>
                </Box>
            </Box>
        }
    >
        <Abc />
    </Tooltip>;
};
