
# PresenceChannel
A class which represents a PresenceChannel on the client-side


* [PresenceChannel](#module_PresenceChannel)
    * [.users](#module_PresenceChannel+users)
    * [.count](#module_PresenceChannel+count) ⇒ <code>number</code>
    * [.countOnly](#module_PresenceChannel+countOnly) ⇒ <code>boolean</code>
    * [.init()](#module_PresenceChannel+init)
    * [.enter()](#module_PresenceChannel+enter)
    * [.leave()](#module_PresenceChannel+leave)
    * [.subscribe()](#module_PresenceChannel+subscribe)
    * [.unsubscribe()](#module_PresenceChannel+unsubscribe)

<a name="module_PresenceChannel+users"></a>

### presenceChannel.users
List of users present in this channel

**Kind**: instance property of [<code>PresenceChannel</code>](#module_PresenceChannel)  
<a name="module_PresenceChannel+count"></a>

### presenceChannel.count ⇒ <code>number</code>
Count of users present in this channel

**Kind**: instance property of [<code>PresenceChannel</code>](#module_PresenceChannel)  
<a name="module_PresenceChannel+countOnly"></a>

### presenceChannel.countOnly ⇒ <code>boolean</code>
Is this channel in countOnly mode?

**Kind**: instance property of [<code>PresenceChannel</code>](#module_PresenceChannel)  
<a name="module_PresenceChannel+init"></a>

### presenceChannel.init()
Create a PresenceChannel

**Kind**: instance method of [<code>PresenceChannel</code>](#module_PresenceChannel)  
<a name="module_PresenceChannel+enter"></a>

### presenceChannel.enter()
Mark the current user as 'present' in this channel
  By default, the user will temporarily 'leave' the channel when
  the current tab is in the background, or has no interaction for more than 60 seconds.
  To override this behaviour, set onlyWhileActive: false
  To specify custom thresholds, set `activeOptions`. See `lib/user-presence.js` for options.

**Kind**: instance method of [<code>PresenceChannel</code>](#module_PresenceChannel)  
<a name="module_PresenceChannel+leave"></a>

### presenceChannel.leave()
Mark the current user as leaving this channel

**Kind**: instance method of [<code>PresenceChannel</code>](#module_PresenceChannel)  
<a name="module_PresenceChannel+subscribe"></a>

### presenceChannel.subscribe()
Start the subscription

**Kind**: instance method of [<code>PresenceChannel</code>](#module_PresenceChannel)  
<a name="module_PresenceChannel+unsubscribe"></a>

### presenceChannel.unsubscribe()
Unsubscribe from this channel

**Kind**: instance method of [<code>PresenceChannel</code>](#module_PresenceChannel)  
