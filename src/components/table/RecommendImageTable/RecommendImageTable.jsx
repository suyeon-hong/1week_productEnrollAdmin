import React from 'react'
import { Table } from '@components/base'
import { ImageContainer } from '@components/domain'
import {
  useTableDispatch,
  useTableState,
} from '../../../contexts/TableContext/TableProvider'
import { CHANGE_RECOMMEND_IMAGES } from '../../../contexts/TableContext/types'

const RecommendImageTable = ({ check = true }) => {
  const { recommendImages } = useTableState()
  const dispatch = useTableDispatch()

  const setImage = (imageType) => {
    return (images) => {
      dispatch({
        type: CHANGE_RECOMMEND_IMAGES,
        payload: { [imageType]: images },
      })
    }
  }

  return (
    <>
      {check && (
        <Table thead="구매자 추천 이미지">
          <ImageContainer
            itemList={recommendImages.recommendImages}
            setItemList={setImage('recommendImages')}
          />
        </Table>
      )}
    </>
  )
}

export default RecommendImageTable
