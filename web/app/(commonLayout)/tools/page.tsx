'use client'
import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useAppContext } from '@/context/app-context'

const ToolProviderList = dynamic(() => import('@/app/components/tools/provider-list'), { ssr: false })

const Layout: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { isCurrentWorkspaceDatasetOperator } = useAppContext()

  useEffect(() => {
    if (typeof window !== 'undefined')
      document.title = `${t('tools.title')} - Dify`

    if (isCurrentWorkspaceDatasetOperator)
      router.replace('/datasets')
  }, [isCurrentWorkspaceDatasetOperator, router, t])

  return <ToolProviderList />
}

export default React.memo(Layout)
