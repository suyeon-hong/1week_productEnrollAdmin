import React from 'react'
import { Button } from '@components/base'
import { OptionRow } from '@components/rows'
import { OptionImageContainer } from '@components/domain'
import theme from '@style/theme'
import styled from '@emotion/styled'

const OptionSetRowWrapper = styled.div``

const OptionSetRow = ({ options, setOptions }) => {
  return (
    <OptionSetRowWrapper>
      {React.Children.toArray(
        options.map(({ imageInfo, optionInfo, addOptions }, index) => (
          <>
            <OptionImageContainer
              imageInfo={imageInfo}
              options={options}
              setOptions={setOptions}
              index={index}
            />
            <OptionRow
              optionInfo={optionInfo}
              addOptions={addOptions}
              setOptions={setOptions}
              index={index}
            />
            <Button
              height={theme.table.baseHeight}
              style={{ marginBottom: theme.table.padding }}
            >
              + 옵션 추가
            </Button>
          </>
        )),
      )}
    </OptionSetRowWrapper>
  )
}

export default OptionSetRow
