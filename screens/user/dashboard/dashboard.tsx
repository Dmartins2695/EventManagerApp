import { Box } from '@/components/ui/box'
import { HStack } from '@/components/ui/hstack'
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb'
import { ChevronLeftIcon, Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Pressable } from '@/components/ui/pressable'
import { Heading } from '@/components/ui/heading'
import { ScrollView } from '@/components/ui/scroll-view'
import { Divider } from '@/components/ui/divider'
import { Grid, GridItem } from '@/components/ui/grid'
import { useRouter } from 'expo-router'
import React from 'react'
import UserLayout from '@/screens/user/layout/_layout'

type MobileHeaderProps = {
  title: string
}

type BottomTabs = {
  iconName: any
  iconText: string
}

const DashboardLayout = (props: any) => {
  return (
    <VStack className="h-full w-full bg-background-muted">
      <Box className="hidden">
        <MobileHeader title={props.title} />
      </Box>
      <VStack className="h-full w-full">
        <HStack className="h-full w-full">
          <VStack className="w-full">{props.children}</VStack>
        </HStack>
      </VStack>
    </VStack>
  )
}

function MobileFooter({ footerIcons }: { footerIcons: any }) {
  const router = useRouter()
  return (
    <HStack
      className={
        'w-svw absolute bottom-0 right-0 left-0 shadow-inner shadow-primary-300 p-3'
      }>
      {footerIcons.map(
        (
          item: { iconText: string; iconName: any },
          index: React.Key | null | undefined,
        ) => {
          return (
            <Pressable
              className="px-0.5 flex-1 flex-col items-center"
              key={index}
              onPress={() => {}}>
              {item.iconName}
              <Text className="text-xs text-center text-typography-600">
                {item.iconText}
              </Text>
            </Pressable>
          )
        },
      )}
    </HStack>
  )
}

function MobileHeader(props: MobileHeaderProps) {
  const router = useRouter()
  return (
    <HStack
      className="py-6 px-4 border-b border-border-50 bg-background-0 items-center"
      space="md">
      <Pressable
        onPress={() => {
          router.back()
        }}>
        <Icon as={ChevronLeftIcon} />
      </Pressable>
      <Text className="text-xl">{props.title}</Text>
    </HStack>
  )
}

const MainContent = () => {
  return (
    <Box className="flex-1 ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: isWeb ? 0 : 100,
          flexGrow: 1,
        }}
        className="flex-1 mb-20 mb-2">
        <VStack className="p-4 pb-0 px-10 pt-6  w-full" space="2xl">
          <Heading size="2xl" className="font-roboto">
            Welcome Alexander
          </Heading>

          <Box className="bg-background-50 p-4 rounded-md">
            <Text className="text-center font-medium">
              To view analytics you need client ID. Add it to your settings and
              you’re good to go.
            </Text>
          </Box>
          <Grid _extra={{ className: 'gap-5' }}>
            <GridItem
              _extra={{
                className: 'col-span-12 sm:col-span-6 lg:col-span-4',
              }}>
              <VStack
                className="border border-border-300 rounded-lg px-4 py-6 items-center justify-between"
                space="sm">
                <Box className="self-start  w-full px-4">
                  <Heading
                    size="lg"
                    className="font-roboto  text-typography-700">
                    Upcoming Holidays
                  </Heading>
                </Box>
                <Divider />
              </VStack>
            </GridItem>
            <GridItem
              _extra={{
                className: 'col-span-12 sm:col-span-6 lg:col-span-4',
              }}>
              <VStack
                className="border border-border-300 rounded-lg px-4 py-6 items-center justify-between"
                space="sm">
                <Box className="self-start  w-full px-4">
                  <Heading
                    size="lg"
                    className="font-roboto  text-typography-700">
                    Your Leaves
                  </Heading>
                </Box>
                <Divider />
              </VStack>
            </GridItem>
            <GridItem
              _extra={{
                className: 'col-span-12 sm:col-span-6 lg:col-span-4',
              }}>
              <VStack
                className="border border-border-300  rounded-lg px-4 py-6 items-center justify-between"
                space="sm">
                <Box className="self-start  w-full px-4">
                  <Heading
                    size="lg"
                    className="font-roboto  text-typography-700">
                    New colleagues
                  </Heading>
                </Box>
                <Divider />
              </VStack>
            </GridItem>
            <GridItem
              _extra={{
                className: 'col-span-12 sm:col-span-6 lg:col-span-4',
              }}>
              <VStack
                className="border border-border-300 rounded-lg px-4 py-6 items-center justify-between"
                space="sm">
                <Box className="self-start w-full px-4">
                  <Heading
                    size="lg"
                    className="font-roboto  text-typography-700">
                    New colleagues
                  </Heading>
                </Box>
                <Divider />
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export const Dashboard = () => {
  return (
    <UserLayout>
      <Text>Dashboard</Text>
    </UserLayout>
  )
}
