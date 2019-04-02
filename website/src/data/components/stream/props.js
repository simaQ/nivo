/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import { Link } from 'gatsby'
import { areaCurvePropKeys, stackOrderPropKeys, stackOffsetPropKeys } from '@nivo/core'
import { StreamDefaultProps as defaults } from '@nivo/stream'
import {
    axesProperties,
    motionProperties,
    defsProperties,
    getPropertiesGroupsControls,
} from '../../../lib/componentProperties'

const curveOptions = []
areaCurvePropKeys.forEach((curve, i) => {
    curveOptions.push(<code key={curve}>'{curve}'</code>)
    if (i < areaCurvePropKeys.length - 1) {
        curveOptions.push(<span key={`${curve}.comma`}>,&nbsp;</span>)
    }
})

const props = [
    {
        key: 'width',
        scopes: ['api'],
        docScopes: '*',
        description: (
            <span>
                not required if using&nbsp;
                <code>&lt;ResponsiveStream&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart width.',
        type: '{number}',
        required: true,
        controlType: 'range',
        group: 'Base',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'height',
        scopes: ['api'],
        docScopes: '*',
        description: (
            <span>
                not required if using&nbsp;
                <code>&lt;ResponsiveStream&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart height.',
        type: '{number}',
        required: true,
        controlType: 'range',
        group: 'Base',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'offsetType',
        scopes: '*',
        description: 'Offset type.',
        type: '{string}',
        required: false,
        controlType: 'choices',
        group: 'Base',
        controlOptions: {
            choices: stackOffsetPropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    {
        key: 'order',
        scopes: '*',
        description: 'Layers order.',
        type: '{string}',
        required: false,
        controlType: 'choices',
        group: 'Base',
        controlOptions: {
            choices: stackOrderPropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    {
        key: 'curve',
        scopes: '*',
        description: (
            <span>
                Defines the curve factory to use for the area generator.
                <br />
                Must be one of: {curveOptions}.
            </span>
        ),
        help: 'Curve interpolation.',
        type: '{string}',
        required: false,
        default: defaults.curve,
        controlType: 'choices',
        group: 'Base',
        controlOptions: {
            choices: areaCurvePropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    {
        key: 'margin',
        scopes: '*',
        description: 'Chart margin.',
        type: '{object}',
        required: false,
        controlType: 'margin',
        group: 'Base',
    },
    {
        key: 'colors',
        scopes: '*',
        description: 'Defines how to compute line color.',
        type: '{string|Function}',
        required: false,
        default: defaults.colors,
        controlType: 'colors',
        group: 'Style',
    },
    {
        key: 'fillOpacity',
        description: 'Layers fill opacity.',
        type: '{number}',
        required: false,
        default: defaults.fillOpacity,
        controlType: 'opacity',
        group: 'Style',
    },
    {
        key: 'borderWidth',
        scopes: ['Stream', 'api'],
        description: 'Width of layer border.',
        type: '{number}',
        required: false,
        default: defaults.borderWidth,
        controlType: 'lineWidth',
        group: 'Style',
    },
    {
        key: 'borderColor',
        scopes: ['Stream', 'api'],
        description: (
            <span>
                how to compute border color,{' '}
                <Link to="/guides/colors">see dedicated documentation</Link>.
            </span>
        ),
        help: 'Method to compute layer border color.',
        type: '{string|Function}',
        required: false,
        default: defaults.borderColor,
        controlType: 'color',
        group: 'Style',
        controlOptions: {
            withCustomColor: true,
        },
    },
    ...defsProperties(['Stream']),
    {
        key: 'enableGridX',
        scopes: '*',
        description: 'Enable/disable x grid.',
        type: '{boolean}',
        required: false,
        default: defaults.enableGridX,
        controlType: 'switch',
        group: 'Grid & Axes',
    },
    {
        key: 'enableGridY',
        scopes: '*',
        description: 'Enable/disable y grid.',
        type: '{boolean}',
        required: false,
        default: defaults.enableGridY,
        controlType: 'switch',
        group: 'Grid & Axes',
    },
    ...axesProperties,
    {
        key: 'enableDots',
        scopes: ['Stream'],
        description: 'Enable/disable dots.',
        type: '{boolean}',
        required: false,
        default: defaults.enableDots,
        controlType: 'switch',
        group: 'Dots',
    },
    {
        key: 'renderDot',
        scopes: ['Stream'],
        description: 'Custom rendering function for dots.',
        type: '{function}',
        required: false,
    },
    {
        key: 'dotSize',
        help: 'Size of the dots',
        description:
            'Size of the dots, it also accepts a function which can be used to make it vary according to the associated datum.',
        type: '{number|Function}',
        required: false,
        default: defaults.dotSize,
        controlType: 'range',
        group: 'Dots',
        controlOptions: {
            unit: 'px',
            min: 2,
            max: 20,
        },
    },
    {
        key: 'dotColor',
        description: 'Method to compute dots color.',
        type: '{string|Function}',
        required: false,
        default: defaults.dotColor,
        controlType: 'color',
        group: 'Dots',
        controlOptions: {
            withCustomColor: true,
        },
    },
    {
        key: 'dotBorderWidth',
        description:
            'Width of the dots border, it also accepts a function which can be used to make it vary according to the associated datum.',
        type: '{number|Function}',
        required: false,
        default: defaults.dotBorderWidth,
        controlType: 'lineWidth',
        group: 'Dots',
    },
    {
        key: 'dotBorderColor',
        scopes: '*',
        description: 'Method to compute dots border color.',
        type: '{string|Function}',
        required: false,
        default: defaults.dotBorderColor,
        controlType: 'color',
        group: 'Dots',
        controlOptions: {
            withCustomColor: true,
        },
    },
    {
        key: 'isInteractive',
        scopes: ['Stream'],
        description: 'Enable/disable interactivity.',
        type: '{boolean}',
        required: false,
        default: defaults.isInteractive,
        controlType: 'switch',
        group: 'Interactivity',
    },
    {
        key: 'enableStackTooltip',
        scopes: ['Stream'],
        description: `Enable/disable stack tooltip ('isInteractive' must also be 'true').`,
        type: '{boolean}',
        required: false,
        default: defaults.enableStackTooltip,
        controlType: 'switch',
        group: 'Interactivity',
    },
    ...motionProperties(['Stream'], defaults),
]

export const groupsByScope = {
    Stream: getPropertiesGroupsControls(props, 'Stream'),
}