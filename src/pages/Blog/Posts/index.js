import React, { Component, Fragment } from 'react'

import { withRouter, Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Section } from '../../../components/Containers'
import { LeftContent, RightContent } from '../../../components/AlignContent'

import Separator, { LineSeparator } from '../../../objects/Separator'
import Image from '../../../objects/Images'
import { Title, SubTitle } from '../../../objects/Titles'
import Paragraph from '../../../objects/Paragraph'
import BlogService from '../../../services/BlogService'
import Button from '../../../objects/Button'


class Posts extends Component {
  state = {
    data: null,
    page: 0,
    total: 0,
    totalPages: 0,
    loading: true,
  }

  async componentDidMount() {
    const { page } = this.props.match.params
    this.loadContent(page)
  }

  loadContent = async (page) => {
    const posts = await BlogService.getPosts(page)
    const { posts: data, total, totalPages } = posts

    this.setState({
      data, total, totalPages, loading: false, page,
    })
  }

  contentLoading = () => (
    <Title type="internal" color="orange">Aguenta ai ;)</Title>
  )

  renderPosts = () => this.state.data.map((post) => {
    if (post.title.rendered && post.content.rendered) {
      return (
        <Fragment key={post.id}>
          <Title type="internal" color="orange" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Title>
          <SubTitle color="white" dangerouslySetInnerHTML={{ __html: moment(post.date).calendar() }}></SubTitle>
          <Paragraph dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></Paragraph>
          <Link to={`./details/${post.slug}/${this.state.page}`}>
            <Button color="purple">Veja Mais</Button>
          </Link>
          <LineSeparator></LineSeparator>
        </Fragment>
      )
    }
    return null
  })

  previousPage = () => {
    const { page } = this.state
    const intPage = parseInt(page, 10)
    if (page > 1) {
      this.props.history.push(`${parseInt(intPage - 1, 10)}`)
    }
  }

  nextPage = () => {
    const { page, totalPages } = this.state
    const intPage = parseInt(page, 10)
    if (page < totalPages) {
      this.props.history.push(`${parseInt(intPage + 1, 10)}`)
    }
  }

  renderPagination = () => {
    const { page, totalPages } = this.state
    const lastPage = page < totalPages
    const firstPage = page > 1
    return (
    <>
      {firstPage && <Button onClick={() => { this.previousPage() }}>Anterior</Button>}
      {lastPage && <Button onClick={() => { this.nextPage() }}>Próxima</Button>}
    </>
    )
  }

  render() {
    return (
      <Section>
        <Separator number="01" title="Blog" />
        <LeftContent>
          <Image />
        </LeftContent>
        <RightContent>
          {(!this.state.loading && this.renderPosts()) || this.contentLoading()}
        </RightContent>
        <RightContent>
          {this.renderPagination()}
        </RightContent>
      </Section>
    )
  }
}


export default withRouter(Posts)
