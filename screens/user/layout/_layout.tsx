import { VStack } from '@/components/ui/vstack'
import { SafeAreaView } from '@/components/ui/safe-area-view'
import { ScrollView } from '@/components/ui/scroll-view'
import React, { useState } from 'react'
import { HStack } from '@/components/ui/hstack'
import { Pressable } from '@/components/ui/pressable'
import { Icon } from '@/components/ui/icon'
import { Menu } from 'lucide-react-native'
import { SideMenu } from '@/components/custom/sideMenu'

type UserLayoutProps = {
  children: React.ReactNode
}

const UserLayout = (props: UserLayoutProps) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <SafeAreaView className="w-full h-full bg-background">
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ flexGrow: 1 }}>
        <VStack>
          <HStack className={'pt-2 pl-2'}>
            <Pressable
              className="px-0.5 flex-1 flex-col items-left"
              onPress={() => setOpenMenu(true)}>
              <Icon as={Menu} className={'stroke-secondary-700'} />
            </Pressable>
            <SideMenu open={openMenu} setOpen={setOpenMenu} />
          </HStack>
          <VStack className="flex-1 w-full h-full p-9 pr-0">
            {props.children}
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserLayout
