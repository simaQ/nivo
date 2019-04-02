/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import { generateLibTree } from '@nivo/generators'
import Layout from '../../components/Layout'
import ApiClient from '../../components/components/api-client/ApiClient'
import { groupsByScope } from '../../data/components/bubble/props'
import mapper from '../../data/components/bubble/mapper'

const root = generateLibTree()

const BubbleApi = () => {
    return (
        <Layout>
            <ApiClient
                componentName="Bubble"
                chartClass="circle-packing"
                apiPath="/charts/bubble"
                dataProperty="root"
                controlGroups={groupsByScope.api}
                propsMapper={mapper}
                defaultProps={{
                    width: 600,
                    height: 600,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    },
                    root: JSON.stringify(root, null, '  '),
                    identity: 'name',
                    value: 'loc',
                    colors: 'nivo',
                    colorBy: 'depth',
                    padding: 1,
                    enableLabel: true,
                    leavesOnly: false,
                    label: 'id',
                    labelSkipRadius: 8,
                    labelTextColor: {
                        type: 'inherit:darker',
                        gamma: 0.8,
                    },
                    labelTextDY: 4,
                    borderWidth: 0,
                    borderColor: {
                        type: 'inherit:darker',
                        gamma: 0.3,
                    },
                }}
            />
        </Layout>
    )
}

export default BubbleApi