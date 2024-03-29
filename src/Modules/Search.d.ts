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

/**
 * Provides an easy method for geocoding address and searching for points of interest from JavaScript.
 * @requires The Microsoft.Maps.Search module.
 */
declare module Microsoft.Maps.Search {

    /** 
     * Defines the geocoding level of the location match found by the geocoder.
     * @requires The Microsoft.Maps.Search module.
     */
    export enum MatchCode {
        /** No match was found. */
        none,

        /** The match was good. */
        good,

        /** The match was ambiguous. Multiple results were returned. */
        ambiguous,

        /** The match was found by a broader search. */
        upHierarchy,

        /** The match was found, but possibly using a modified query. */
        modified
    }

    /** 
     * Defines the confidence of the location match found by the geocoding service.
     * @requires The Microsoft.Maps.Search module.
     */
    export enum MatchConfidence {
        /** The confidence of the match is high. */
        high,

        /** The confidence of the match is medium. */
        medium,

        /** The confidence of the match is low. */
        low,

        /** The confidence of the match is unknown. */
        unknown
    }

    /** An object that represents a geocoded location. */
    export interface IGeocodeLocation {
        /** The latitude of the location. */
        latitude: number;
		
		/** The longitude of the location. */
		longitude: number;

        /** The name of this geocode location match. */
        name: string;

        /** 
		 * The precision of this geocode location match. 
		 * Possible Values: Interpolated, InterpolatedOffset, Rooftop, Parcel
		 */
        precision: string ;
    }

    /** An object that represents an place result. */
    export interface IPlaceResult {
        /** The geocoded address of the place result. */
        address: IAddress;

        /** The location rectangle that defines the boundaries of the best map view of the place result. */
        bestView: LocationRect;

        /** The classification of the geographic entity returned, such as PopulatedPlace. */
        entityType: string;

        /** The geocoded location of the best result. */
        location: Location;

        /** The geocoded locations. */
        locations: IGeocodeLocation[];

        /** The match code of the best result. */
        matchCode: string | MatchCode;

        /** The match confidence of the best result. */
        matchConfidence: string | MatchConfidence;

        /** The name of the place result, if one exists. */
        name: string;
    }

    /** An object that represents a geocode result returned by REST service. */
    export interface IGeocodeResult {
        /** An array of geocode results. */
        results: IPlaceResult[];
    }

    /** The options for a geocode request. */
    export interface IGeocodeRequestOptions {
        /** 
         * A location rectangle that defines the boundaries of the area in which to search for 
         * location results. The default is the bounds of the map view associated with this 
         * instance of the SearchManager, which is usually the current map view.
         */
        bounds?: LocationRect;

        /**
         * The name of the function to call when a successful result is returned from the 
         * geocode request. The callback function must accept two parameters: result, which is 
         * a GeocodeResult type, and a userData object.
         */
        callback: (geocodeResult: IGeocodeResult, userData: any) => void;

        /** The maximum number of results to return. Required. The maximum number than can be returned is 20. */
        count?: number;

        /**
         * The name of the function to call when the request is returned with an error. The 
         * error callback function must accept an IGeocodeRequestOptions object.
         */
        errorCallback?: (geocodeRequestOptions: IGeocodeRequestOptions) => void;

        /** Specifies to include the two-letter ISO country code. */
        includeCountryIso2?: boolean;

        /** Specifies to include the neighborhood in the response when it is available. */
        includeNeighborhood?: boolean;

        /** A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds. */
        timeout?: number;

        /** An object containing any data that needs to be passed to the callback when the request is completed. */
        userData?: any;

        /** A string containing the address or place to be matched to a location on the map.  */
         where: string;
    }

    /** The options for a reverse geocode request. */
    export interface ReverseGeocodeRequestOptions {
        /**
         * A reference to a function to call when a successful result is returned from the geocode request. The callback function
         * will receive a PlaceResult object as an argument.
         */
        callback: (placeResult: IPlaceResult, userData: any) => void;

        /**
         * A reference to a function to call when the request is returned with an error. The error callback function will receive
         * an object containing the geocode request options used in the request.
         */
        errorCallback?: (reverseGeocodeRequestOptions: ReverseGeocodeRequestOptions) => void;

        /** Specifies to include the two-letter ISO country code. Default: false */
        includeCountryIso2?: boolean;

        /**
         *  An array of entity types selected from the following options.
         * • Address
         * • Neighborhood
         * • PopulatedPlace
         * • Postcode1
         * • AdminDivision1
         * • AdminDivision2
         * • CountryRegion
         * These entity types are ordered from the most specific entity to the least specific entity. When entities of more than one entity type are found, only the most specific
         * entity is returned. For example, if you specify Address and AdminDistrict1 as entity types and entities were found for both types, only the Address entity information is
         * returned in the response. One exception to this rule is when both PopulatedPlace and Neighborhood entity types are specified and information is found for both. In this case,
         * the information for both entity types is returned. Also, more than one Neighborhood may be returned because the area covered by two different neighborhoods can overlap.
         */
        includeEntityTypes?: string[];

        /**
         * Specifies to include the neighborhood in the response when it is available. Note: This feature isn’t
         * available in all locations.
         */
        includeNeighborhood?: boolean;

        /** The location to use to match to geographic entities and addresses. */
        location: Location;

        /** A number indicating how long to wait, in seconds, for the reverse geocode request to  return. The default value is 5 seconds. */
        timeout?: number;

        /** An object containing any data that needs to be passed to the callback when the request is completed. */
        userData?: any;
    }

    /**
    * A class that contains methods for returning search and location results.
    * @requires The Microsoft.Maps.Search module.
    */
    export class SearchManager {
        /**
         * @constructor
         * @requires The Microsoft.Maps.Search module.
         * @param map A Map object
         */
        constructor(map: Map);

        /**
         * Matches the address or place query in the specified request 
         * options to a location and returns the results to the request 
         * options callback function.
         * @param request Options for sending geocode request
         */
        public geocode(request: IGeocodeRequestOptions): void;

        /**
         * Matches the specified location to an address and returns the 
         * address results to the specified request options callback function.
         * @param request Options for sending reverse geocode request
         */
        public reverseGeocode(request: ReverseGeocodeRequestOptions): void;
    }
}