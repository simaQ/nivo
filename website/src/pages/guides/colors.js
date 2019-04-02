/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import ColorsIllustrations from '../../components/guides/colors/ColorsIllustrations'
import ColorsRanges from '../../components/guides/colors/ColorsRanges'
import ColorsColor from '../../components/guides/colors/ColorsColor'

const Colors = () => (
    <Layout>
        <Helmet title="Colors" />
        <div className="page_content">
            <div className="guide__header">
                <h1 className="page_header">Colors</h1>
            </div>
        </div>
        <div className="guide__description text-content">
            <h2>The colors property</h2>
            <p>
                Beside highlighting data insights, your dataviz should be pretty, right?
                <br />
                nivo provides an easy way to deal with colors, very useful when using nested
                components.
            </p>
        </div>
        <ColorsIllustrations />
        <div className="guide__description text-content">
            <h2>Available color schemes</h2>
            <p>
                Almost all color schemes come from{' '}
                <a
                    href="https://github.com/d3/d3-scale-chromatic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    d3-scale-chromatic
                </a>
                .
            </p>
        </div>
        <ColorsRanges />
        <div className="guide__description text-content">
            <h2>Single color property</h2>
            <p>
                A lot of components have a <code>*Color</code> property, but what can we pass to it
                ?
            </p>
        </div>
        <ColorsColor />
    </Layout>
)

export default Colors