/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { useState, useCallback } from 'react'
import { ResponsiveTreeMapHtml, TreeMapDefaultProps } from '@nivo/treemap'
import Layout from '../../components/Layout'
import ComponentPage from '../../components/components/ComponentPage'
import ComponentHeader from '../../components/components/ComponentHeader'
import ComponentDescription from '../../components/components/ComponentDescription'
import ComponentTabs from '../../components/components/ComponentTabs'
import ActionsLogger, { useActionsLogger } from '../../components/components/ActionsLogger'
import ComponentSettings from '../../components/components/ComponentSettings'
// import Stories from '../../components/components/Stories'
import generateCode from '../../lib/generateChartCode'
import treemap from '../../data/components/treemap/meta.yml'
import mapper from '../../data/components/treemap/mapper'
import { groupsByScope } from '../../data/components/treemap/props'
import { generateLightDataSet } from '../../data/components/treemap/generator'
//import nivoTheme from '../../../nivoTheme'

const initialSettings = {
    identity: 'name',
    value: 'loc',
    tile: 'squarify',
    leavesOnly: false,
    innerPadding: 3,
    outerPadding: 3,

    margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    },

    enableLabel: true,
    label: 'loc',
    labelFormat: '.0s',
    labelSkipSize: 12,
    labelTextColor: {
        type: 'inherit:darker',
        gamma: 1.2,
    },
    orientLabel: true,

    colors: 'set2',
    colorBy: 'name',
    borderWidth: 0,
    borderColor: {
        type: 'inherit:darker',
        gamma: 0.3,
    },

    animate: true,
    motionStiffness: 90,
    motionDamping: 11,

    isInteractive: true,
}

const TreeMapHtml = () => {
    const [settings, setSettings] = useState(initialSettings)
    const [data, setData] = useState(generateLightDataSet())
    const diceRoll = useCallback(() => setData(generateLightDataSet()), [setData])
    const [actions, logAction] = useActionsLogger()
    const onClick = useCallback(
        node => {
            logAction({
                type: 'click',
                label: `[cell] ${node.id}: ${node.value}`,
                data: node,
            })
        },
        [logAction]
    )

    const mappedSettings = mapper(settings)

    const code = generateCode('ResponsiveTreeMapHtml', mappedSettings, {
        dataKey: 'root',
        pkg: '@nivo/treemap',
        defaults: TreeMapDefaultProps,
    })

    return (
        <Layout>
            <ComponentPage>
                <ComponentHeader chartClass="TreeMapHtml" tags={treemap.TreeMapHtml.tags} />
                <ComponentDescription description={treemap.TreeMapHtml.description} />
                <ComponentTabs
                    chartClass="treemap"
                    code={code}
                    data={data.root}
                    diceRoll={diceRoll}
                >
                    <ResponsiveTreeMapHtml
                        root={data.root}
                        {...mappedSettings}
                        //theme={nivoTheme}
                        onClick={onClick}
                    />
                </ComponentTabs>
                <ActionsLogger actions={actions} isFullWidth={true} />
                <ComponentSettings
                    component="TreeMapHTML"
                    settings={settings}
                    onChange={setSettings}
                    groups={groupsByScope.TreeMapHTML}
                />
            </ComponentPage>
        </Layout>
    )
}

export default TreeMapHtml