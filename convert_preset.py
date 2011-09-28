import os,re,sys

dirname = sys.argv[1]
fnames = """Aderrasi - Blender.milk
bmelgren - Godhead.milk
Che - Escape.milk
Che - Terracarbon Stream.milk
CrystalHigh - mad ravetriping.milk
Aderrasi - Candy Avian.milk
Aderrasi - Making Time (Swamp Mix).milk
Aderrasi - Flowing Form.milk
CatalystTheElder - Electric Rosebud_Phat_texture_edit.milk
Eo.S. - skylight a3 [trip colors flux2]_phat_Multi_shaped2_zoe_colours5.milk
Eo.S.+Phat Cool Bug_arm.milk
Eo.S.+Phat Cool Bug_arm_textured.milk
Eo.S.+Phat Fractical_dancer - pulsate B.milk
Fvese - The Tunnel (Final Stage Mix).milk
Geiss and Rovastar - The Chaos Of Colours (sprouting dimentia mix).milk
Idiot & Rovastar - Altars Of Madness 2 (X.42 Mix).milk
Idiot - Texture Boxes (Remix 2).milk
Idiot - Texture Boxes (Remix).milk
Idiot24-7 - Ascending to heaven 2.milk
Illusion & Che - Return Of The King.milk
Illusion & Che - The Piper.milk
Illusion & Unchained - Frozen Eye 1.milk
Rovastar - Harlequin's Dynamic Fractal (Crazed Spiral Mix).milk
Phat_Eo.S. - our own personal demon.milk
Phat_Rovastar - What_does_your_soul_look_like.milk
Phat_Rovastar_Eo.S. spiral_faces.milk
Pithlit & Illusion - Symetric pattern.milk
Rovastar - Twilight Tunnel.milk
Rovastar & Rocke - Headspin.milk
Rovastar & Unchained - Centre Of Gravity.milk
Rovastar - A Million Miles from Earth (Pathfinder Mix).milk
Rovastar - Altars Of Harlequin's Madness (Dark Disorder Mix.milk
Rovastar - Explosive Minds.milk
Rovastar - Fractopia (Upspoken Mix).milk
Rovastar - Forgotten Moon.milk
Rovastar - Magic Carpet.milk
Rovastar - Omnipresence Resurrection.milk
Rovastar - Timeless Voyage.milk
Rozzer & Neuro - Starover (Semicolon Mix).milk
Unchained - Cranked On Failure.milk
Aderrasi - Aimless (Gravity Directive Mix).milk
Aderrasi - Aimless (Spirogravity Mix).milk
Aderrasi - Anchorpulse (Verified Mix).milk
Aderrasi - Antidote (Aqualung Mix).milk
Aderrasi - Airhandler (Menagerie Mix).milk
Aderrasi - Anchorpulse (Pulse Of A Ghast II Mix).milk
Aderrasi - Anchorpulse (Verified Mix).milk
Aderrasi - Antidote (Side Effects Mix).milk
Aderrasi - Antidote.milk
Aderrasi - Antique Abyss.milk
Aderrasi - Ashes Of Air (Remix).milk
Aderrasi - Bitterfeld (Crystal Border Mix).milk
Aderrasi - Brakefreak.milk
Aderrasi - Chromatic Abyss (The Other Side).milk
Aderrasi - Contortion (Xenomorph Mix).milk
Aderrasi - Dark Matter (Converse Mix).milk
Aderrasi - Multiviola.milk
Bmelgren & Krash - Rainbow Orb Peacock (Lonely Signal Gone .milk
bmelgren - Take this highway.milk
EvilJim - Ice Drops.milk
Fvese - Lifesavor Anyone.milk
Fvese - Window Reflection 6.milk
Geiss & Rovastar - Notions Of Tonality 2.milk
Geiss & Rovastar - Tokamak (Naked Intrusion Mix).milk
Geiss - Cosmic Dust 2.milk
Geiss - Cruzin'.milk
Geiss - Downward Spiral.milk
Geiss - Dynamic Swirls 1.milk
Geiss - Dynamic Swirls 2.milk
Geiss - Eggs.milk
Geiss - El Cubismo.milk
Geiss - Oldskool Mellowstyle.milk
Geiss - Swirlie 4.milk
Geiss - Swirlie 5.milk
Krash & Rovastar - Altars of Madness (Mad Ocean Mix).milk
Krash & TEcHNO - Rhythmic Mantas.milk
Krash - Digital Flame.milk
Krash - Dynamic Borders 1.milk
Krash - Interwoven (Nightmare Weft Mix).milk
Krash - War Machine (Shifting Complexity Mix).milk
nil - Can't Stop the Cramming.milk
Phat_Eo.S._Algorithm.milk
Rovastar & Geiss - Dynamic Swirls 3 (Broken Destiny Mix).milk
Rovastar & Geiss - Dynamic Swirls 3 (Mysticial Awakening Mi.milk
Rovastar & Geiss - Dynamic Swirls 3 (Poltergiest Mix).milk
Rovastar & Geiss - Dynamic Swirls 3 (Twisted Truth Mix).milk
Rovastar & Geiss - Dynamic Swirls 3 (Voyage Of Twisted Souls Mix).milk
Rovastar & Geiss - Surface (Vectrip Mix).milk
Rovastar & Idiot24-7 - Balk Acid.milk
Rovastar - Altars Of Madness (Duel Mix).milk
Rovastar - Bellanova (New Wave Mix).milk
Rovastar - Chapel Of Ghouls.milk
Rovastar - Cosmic Echoes 2.milk
Rovastar - Cosmic Mosaic (Active Mix).milk
Rovastar - Decreasing Dreams (Extended Movement Mix).milk
Rovastar - Fractopia (Fractal Havok Mix).milk
Rovastar - Future Speakers.milk
Rovastar - Harlequin's Fractal Encounter.milk
Rovastar - Inner Thoughts (Dark Secret Mix).milk
Rovastar - Kalideostars (Round  Round Mix).milk
Rovastar - Kalideostars.milk
Rovastar - Pandora's Volcano.milk
Rovastar - Parallel Universe.milk
Rovastar - Sea Shells.milk
Rovastar - Sunflower Passion (Simple Mix).milk
Rovastar - Sunflower Passion.milk
Rovastar - The Awakening.milk
Rovastar - The Chaos Of Colours (Drifting Mix).milk
Rovastar - Twilight Tunnel.milk
Rovastar and Krash - Hallucinogenic Pyramids (Extra Beat Ti.milk
Rovastar and Unchained - Braindance Visions.milk
Rozzor & Rovastar - Oozing Resistance (Waveform Mod).milk
shifter - flashburn.milk
StudioMusic & Unchained - Remembering How You Were (Perceived Mix).milk
StudioMusic & Unchained - State Of Discretion.milk
StudioMusic & Unchained - Wrenched Fate.milk
Telek - Slow Shift Matrix (bb4.5).milk
Unchained & Rovastar - For The Seagull.milk
Unchained - Beat Demo 2.1.milk
Unchained - Goofy Beat Detection.milk
Unchained - Shaping The Grid.milk
Unchained - ReAwoke.milk
Unchained - In Memory Of Peg.milk
Bmelgren & Krash - Rainbow Orb Peacock (Centred Journey Mix.milk
Bmelgren - Pentultimate Nerual Slipstream (Tweak 2).milk
Eo.S.+Phat Fractical_dancer - pulsate box_mix.milk
Eo.S.+Phat Fractical_dancer_Peacock.milk
EvilJim - Follow the ball.milk
Fvese - The Tunnel (Final Stage Mix).milk
fiShbRaiN - crazy diamond.milk
fiShbRaiN - cthulhus asshole.milk
fiShbRaiN - plasma temptation.milk
Geiss - Feedback 2.milk
Geiss - High Dynamic Range.milk
Geiss - Octopus.milk
Geiss - Swirlie 1.milk
Geiss - Swirlie 2.milk
Geiss - Swirlie 3.milk
Geiss - The Fatty Lumpkin Sunkle Tweaker.milk
Illusion & Unchained - Invade My Mind.milk
Krash & Illusion - Spiral Movement.milk
nil - Can't Stop the Blithering.milk
Rovastar & Fvese - Stranger Minds (Astral Mix).milk
Rovastar - Fractopia (Focused Childhood Mix ).milk
Rovastar - Hallucinogenic Pyramids (Beat Time Mix).milk
Rovastar - The Chaos Of Colours.milk
Rovastar - Torrid Tales.milk
Rozzor & Aderrasi - Canon.milk
Rozzor & Che - Inside The House Of Nil.milk
shifter - pinwheel.milk
Studio Music and Unchained - Rapid Alteration.milk
StudioMusic & Unchained - Entity.milk
StudioMusic & Unchained - Minor Alteration.milk
StudioMusic - It's Only Make Believe.milk
Unchained & Illusion - Logic Morph.milk
Unchained & Rovastar - Triptionary.milk
Unchained - Beat Demo 1.0.milk
Unchained - Beat Demo 2.0.milk
Unchained - Beat Demo 2.2.milk
Unchained - Beat Demo 2.3.milk
Unchained - Deeper Logic.milk
Unchained - Ribald Ballad.milk
Unchained - Subjective Experience Of The Manifold.milk""".split('\n')


eqn_subs = [(re.compile(pat),sub) for pat,sub in
            [(r'if ?\(', r'ifcond(')]]

def serialize_eqns(eqns,indent="    "):
    js = ""
    for eqn,lines in eqns.iteritems():
        js += "%s%s: function(_){with(_){\n" % (indent, eqn)
        lines = lines.items()
        lines.sort(key = lambda line: line[0])
        for lineno,expr in lines:
            js += "%s  %s\n" % (indent, expr)
        js += "%s}},\n" % indent
    return js

def serialize_subs(subs,subs_eqns,name):
    js = "    %s: [\n"%name
    subs = subs.items()
    subs.sort(key = lambda x: x[0])
    for subn,sub in subs:
        js += "      {\n"
        for key,val in sub:
            js += "       %s: %s,\n" % (key,val)
        js += serialize_eqns(subs_eqns.get(subn,{}), indent = "       ")
        js += "      },\n"
    js += "    ],\n"
    return js

def convert_eqn(eqn):
    if eqn.startswith("//"): return eqn
    for patt,repl in eqn_subs:
        eqn = patt.sub(repl,eqn)
    return eqn

js = "var Presets = {};\n\n"

for fname in fnames:
    if not fname.endswith(".milk"): continue

    contents = open(os.path.join(dirname,fname),"rb").read()
    if "\r\n" in contents:
        lines = contents.split("\r\n")
    else:
        lines = contents.split("\n")

    for i,line in enumerate(lines):
        if line.startswith("[preset"):
            lines = lines[i+1:]
            break

    preset = []
    equations = {}
    waves = {}
    wave_eqns = {}
    shapes = {}
    shape_eqns = {}

    def parse_sub_eqn(key,val,sub_eqns,sub):
        keysplit = key.split("_")
        subn = int(keysplit[1])
        subkey = '_'.join(keysplit[2:])
        eqns = sub_eqns.setdefault(subn,{})
        sub = sub_eqns.setdefault(subn,{})
        for type in ["init","per_frame","per_point"]:
            if subkey.startswith(type):
                lineno = int(subkey[len(type):])
                eqns.setdefault(type + "_code",{})[lineno] = convert_eqn(val);
            

    for line in lines:
        if not line: continue
        key,val = line.split("=",1)
        key = key.strip()
        val = val.strip()
        if key.startswith("per_frame_init_"):
            lineno = int(key.split("_")[-1])
            equations.setdefault('init_code', {})[lineno] = convert_eqn(val)
        elif key.startswith("per_frame_"):
            lineno = int(key.split("_")[-1])
            equations.setdefault('per_frame_code', {})[lineno] = convert_eqn(val)
        elif key.startswith("per_pixel_"):
            lineno = int(key.split("_")[-1])
            equations.setdefault('per_pixel_code', {})[lineno] = convert_eqn(val)
        elif key.startswith("wavecode_"):
            keysplit = key.split("_")
            subn = int(keysplit[1])
            subkey = '_'.join(keysplit[2:])
            sub = waves.setdefault(subn,[])
            sub.append((subkey,val))
        elif key.startswith("shapecode_"):
            keysplit = key.split("_")
            subn = int(keysplit[1])
            subkey = '_'.join(keysplit[2:])
            sub = shapes.setdefault(subn,[])
            sub.append((subkey,val))
        elif key.startswith("wave_") and key[5].isdigit():
            parse_sub_eqn(key,val,wave_eqns,waves)
        elif key.startswith("shape_"):
            parse_sub_eqn(key,val,shape_eqns,shapes)

        else:
            try:
                val = int(val)
            except ValueError:
                val = float(val)
            preset.append((key,val))

    js += "Presets[\"%s\"] = {\n" % fname
    for key,val in preset:
        js += "    %s: %s,\n" % (key, val)
    js += serialize_eqns(equations)
    js += serialize_subs(shapes,shape_eqns,"shapes")
    js += serialize_subs(waves,wave_eqns,"waves")

    js += "  };\n\n"

print js

