﻿/*
 * Copyright(c) 2017 Microsoft Corporation. All rights reserved. 
 * 
 * This code is licensed under the MIT License (MIT). 
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do 
 * so, subject to the following conditions: 
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software. 
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE. 
*/

/// <reference path="../app/Microsoft.Maps.d.ts"/>

declare module Microsoft.Maps {
    /** Options for customizing how the heat map is rendered. */
    export interface IHeatMapLayerOptions {
        /**
        * The temperature gradient that is used to colorize the map. Default gradient:
        *    {
        *        '0.00': 'rgb(255,0,255)', // Magenta
        *        '0.25': 'rgb(0,0,255)', // Blue
        *        '0.50': 'rgb(0,255,0)', // Green
        *        '0.75': 'rgb(255,255,0)', // Yellow
        *        '1.00': 'rgb(255,0,0)' // Red
        *    }
        */
        colorGradient?: IDictionary<string>;

        /**
        * The intensity of each heat point. This is a decimal value between 0 and 1. This is used to specify how "hot" a single data point should be. Default: 0.5
        */
        intensity?: number;

        /**
        * The opacity of the HeatMapLayer canvas. Value should be a decimal between 0 and 1. Default: 1
        */
        opacity?: number;
        
        /**
        * The radius to draw each data point on the map. Default: 10
        */
        radius?: number;
        
        /**
        * The distance units of the radius. Possible values are:
        * 
        * • 'pixels' (defualt)
        * • 'meters'
        *
        * When set to pixels the size of each data point will always be the same radius, regardless of zoom level. When set to meters, the size of the data points
        * will scale based on zoom level so as to ensure that the radius is spatially accurate.
        */
        unit?: 'meters' | 'pixel';

        /** A boolean indicating if the heat map layer is visible or not. **/
        visible?: boolean;
    }

    /**
     * Class for rendering data as a heat map layer.
     * @requires The Microsoft.Maps.Heatmap module.
     */
    export class HeatMapLayer implements IDataLayer {
        /**
         * @constructor
         * @requires The Microsoft.Maps.Heatmap module.
         * @param locations Set of locations to visualize as a heat map.
         * @param options Options for customizing how the heat map is rendered.
         */
        constructor(locations: (Location | Pushpin)[], options?: IHeatMapLayerOptions);

        /** Clears all data in the heat map layer. */
        public clear(): void;

        /** Disposes the heat map layer. */
        public dispose(): void;
        
        /**
         * Gets a boolean indicating if the heat map layer is visible or not.
         * @returns A boolean indicating if the heat map layer is visible or not.
         */
        public getVisible(): boolean;

        /** 
        * @deprecated
        * Hides the heat map layer.
        */
        public hide(): void;

        /**
         * Specifies the locations to use when generating the heat map.
         * @param locations Set of locations.
         */
        public setLocations(locations: (Location | Pushpin)[]): void;

        /**
        * Sets the options to use with the heat map layer.
        * @param options Set of heat map layer options.
        */
        public setOptions(options: IHeatMapLayerOptions): void;

        /**
        * Sets the visibility of the heat map layer.
        * @param visible A boolean indicating if the heat map layer is visible or not.
        */
        public setVisible(visible: boolean): void;

        /** 
        * @deprecated
        * Shows the heat map layer.
        */
        public show(): void;        
    }
}