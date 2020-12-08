var nometal, copper, silver, electrum, gold, platinum, mithral, adamantine = false;
var backgrounds, feats, npcs, sidekicks, races, spells, mechanics, classes, items, monsters, adventures = false;
var artificer, barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard = false;
var series, BOF, EA, CC, ME, PP, AA = false;

$(document).ready(function(){
	  $("#filter-all" ).click(function() {
			setAllBool(true);
			
			$('.filterImage').removeClass('off');
			$('.filterImage').addClass('on');
			$('.classTray').show();
		  	$('.seriesTray').show();
			refresh();			
	  } );
	  
	  $("#filter-none" ).click( function() {
			setAllBool(false);
			
			$('.filterImage').removeClass('on');
			$('.filterImage').addClass('off');
			$('.classTray').hide();
		  	$('.seriesTray').hide();
			refresh();
	  } );
	
	  $('.filterImage').click(function(){			  
		console.log($(this));
		if ($(this).hasClass('on')){
			$(this).removeClass('on')
			$(this).addClass('off');					
			//$(this).css('opacity','1.0');
		}else {
			$(this).removeClass('off')
			$(this).addClass('on');					
			//$(this).css('opacity','0.5');
		}		
	  });
	  
	  $("#filter-no-metal").click(function(){								
		if ($(this).hasClass('on')){
			nometal=true;			
		} else {
			nometal=false;
		}
		refresh();		
	  });       
	  
	  $("#filter-copper").click(function(){										
		if ($(this).hasClass('on')){
			copper=true;
		} else {
			copper=false;
		}
		refresh();		
	  });        
	  $("#filter-silver").click(function(){						
		if ($(this).hasClass('on')){
			silver=true;
		} else {
			silver=false;
		}
		refresh();		
	  }); 	  
	  
	  $("#filter-electrum").click(function(){						
		if ($(this).hasClass('on')){
			electrum=true;
		} else {
			electrum=false;
		}
		refresh();		
	  });        
	  
	  $("#filter-gold").click(function(){						
		if ($(this).hasClass('on')){
			gold=true;
		} else {
			gold=false;
		}
		refresh();		
	  });        
	  
	  $("#filter-platinum").click(function(){						
		if ($(this).hasClass('on')){
			platinum=true;
		} else {
			platinum=false;
		}
		refresh();		
	  });        
	  
	  $("#filter-mithral").click(function(){						
		if ($(this).hasClass('on')){
			mithral=true;
		} else {
			mithral=false;
		}
		refresh();		
	  });        
	  
	  $("#filter-adamantine").click(function(){						
		if ($(this).hasClass('on')){
			adamantine=true;			
		} else {
			adamantine=false;
		}
		refresh();		
	  });        
	  
	  $("#filter-backgrounds").click(function(){						
		if ($(this).hasClass('on')){
			backgrounds=true;
		} else {
			backgrounds=false;
		}
		refresh();		
	  });        			  
	  
	  $("#filter-feats").click(function(){						
		if ($(this).hasClass('on')){
			feats=true;
		} else {
			feats=false;
		}
		refresh();		
	  });        			  
	  
	  $("#filter-npcs").click(function(){		
		if ($(this).hasClass('on')){
			npcs=true;			
		} else {
			npcs=false;
		}	
		refresh();		
	  });     
	  
	  $("#filter-sidekicks").click(function(){						
		if ($(this).hasClass('on')){
			sidekicks=true;
		} else {
			sidekicks=false;
		}	
		refresh();
	  });       

		$("#filter-races").click(function(){						
		if ($(this).hasClass('on')){
			races=true;
		} else {
			races=false;
		}	
		refresh();
	  });
	  
	$("#filter-spells").click(function(){						
		if ($(this).hasClass('on')){
			spells=true;
		} else {
			spells=false;
		}	
		refresh();
	 });
	 
	$("#filter-mechanics").click(function(){						
		if ($(this).hasClass('on')){
			mechanics=true;
		} else {
			mechanics=false;
		}	
		refresh();
	 });
	 
	 $("#filter-classes").click(function(){						
		if ($(this).hasClass('on')){
			classes= true;
			$('.classTray').show();
		} else {
			classes= false;
			$('.classTray').hide();
		}	
		refresh();
	 });
	
	$("#filter-series").click(function(){						
		if ($(this).hasClass('on')){
			classes= true;
			$('.seriesTray').show();
		} else {
			classes= false;
			$('.seriesTray').hide();
		}	
		refresh();
	 });
	 
	 $("#filter-items").click(function(){						
		if ($(this).hasClass('on')){
			items= true;
		} else {
			items= false;
		}	
		refresh();
	 });
	 
	 $("#filter-monsters").click(function(){						
		if ($(this).hasClass('on')){
			monsters= true;
		} else {
			monsters= false;
		}	
		refresh();
	 });
	 
	  $("#filter-adventures").click(function(){						
		if ($(this).hasClass('on')){
			adventures= true;
		} else {
			adventures= false;
		}	
		refresh();
	 });
	
	$("#filter-BOF").click(function(){						
		if ($(this).hasClass('on')){
			artificer= true;
		} else {
			artificer= false;
		}	
		refresh();
	 });
	
	$("#filter-EA").click(function(){						
		if ($(this).hasClass('on')){
			artificer= true;
		} else {
			artificer= false;
		}	
		refresh();
	 });
	
	$("#filter-CC").click(function(){						
		if ($(this).hasClass('on')){
			artificer= true;
		} else {
			artificer= false;
		}	
		refresh();
	 });
	
	$("#filter-ME").click(function(){						
		if ($(this).hasClass('on')){
			artificer= true;
		} else {
			artificer= false;
		}	
		refresh();
	 });
	
	$("#filter-PP").click(function(){						
		if ($(this).hasClass('on')){
			artificer= true;
		} else {
			artificer= false;
		}	
		refresh();
	 });
	
	$("#filter-AA").click(function(){						
		if ($(this).hasClass('on')){
			artificer= true;
		} else {
			artificer= false;
		}	
		refresh();
	 });
	 
	 $("#filter-artificer").click(function(){						
		if ($(this).hasClass('on')){
			artificer= true;
		} else {
			artificer= false;
		}	
		refresh();
	 });
	 
	 $("#filter-barbarian").click(function(){						
		if ($(this).hasClass('on')){
			barbarian= true;
		} else {
			barbarian= false;
		}	
		refresh();
	 });
	 
	 $("#filter-bard").click(function(){						
		if ($(this).hasClass('on')){
			bard= true;
		} else {
			bard= false;
		}	
		refresh();
	 });
	 
	 $("#filter-cleric").click(function(){						
		if ($(this).hasClass('on')){
			cleric= true;
		} else {
			cleric= false;
		}	
		refresh();
	 });
	 
	 $("#filter-druid").click(function(){						
		if ($(this).hasClass('on')){
			druid= true;
		} else {
			druid= false;
		}	
		refresh();
	 });
	 
	 $("#filter-fighter").click(function(){						
		if ($(this).hasClass('on')){
			fighter= true;
		} else {
			fighter= false;
		}	
		refresh();
	 });
	 
	 $("#filter-monk").click(function(){						
		if ($(this).hasClass('on')){
			monk= true;
		} else {
			monk= false;
		}	
		refresh();
	 });
	 
	 $("#filter-paladin").click(function(){						
		if ($(this).hasClass('on')){
			paladin= true;
		} else {
			paladin= false;
		}	
		refresh();
	 });
	 
	 $("#filter-ranger").click(function(){						
		if ($(this).hasClass('on')){
			ranger= true;
		} else {
			ranger= false;
		}	
		refresh();
	 });
	 
	 $("#filter-rogue").click(function(){						
		if ($(this).hasClass('on')){
			rogue= true;
		} else {
			rogue= false;
		}	
		refresh();
	 });
	 
	 $("#filter-sorcerer").click(function(){						
		if ($(this).hasClass('on')){
			sorcerer= true;
		} else {
			sorcerer= false;
		}	
		refresh();
	 });
	 
	 $("#filter-warlock").click(function(){						
		if ($(this).hasClass('on')){
			warlock= true;
		} else {
			warlock= false;
		}	
		refresh();
	 });
	 
	 $("#filter-wizard").click(function(){						
		if ($(this).hasClass('on')){
			wizard= true;
		} else {
			wizard= false;
		}	
		refresh();
	 });
 });
 
 function setAllBool(value){
		nometal = value;
		copper = value;
		silver = value;
		electrum = value;
		gold = value;
		platinum = value;
		mithral = value;
		adamantine = value;
		
		backgrounds = value;
		feats = value;
		npcs = value;
		sidekicks = value;
		races = value;
		spells = value;
		mechanics = value;			
		classes = value;
		items = value;
		monsters = value;
		adventures = value;
	 	series = value;
	 
	 	BOF = value;
		EA = value;
		CC = value;
		ME = value;
		PP = value;
		AA = value;
		
		artificer = value;
		barbarian = value;
		bard = value;
		cleric = value;
		druid = value;
		fighter = value;
		monk = value;
		paladin = value;
		ranger = value;
		rogue = value;
		sorcerer = value;
		warlock = value;
		wizard = value;
 }
 
 function refreshX(){	 
		console.log(
			"No-metal: " + nometal +
			" Copper: " + copper + 
			" Silver: " + silver + 
			" Electrum: " + electrum + 
			" Gold: " + gold + 
			" Platinum: " + platinum +
			" Mithral: " + mithral +
			" Adamantine: " + adamantine + 
			" Backgrounds: " + backgrounds +
			" Feats: " + feats + 
			" NPCs: " + npcs + 
			" Sidekicks: " + sidekicks +
			" Races: " + races + 
			" Spells: " + spells +
			" Mechanics: " + mechanics +
			" Classes: " + classes +
			" Items: "+ items + 
			" Monsters: " + monsters +
			" Adventures: " + adventures
		);
		
		var allMetalsFiltered = false;
		//  && mithral && adamantine when I finally have those.
		if (nometal && copper && silver && electrum && gold && platinum){
			console.log("All metals filtered.");
			allMetalsFiltered = true;
		}
		
		var allCatFiltered = false;
		if (backgrounds && feats && npcs && sidekicks && races && spells && mechanics && classes && items && monsters && series){
			console.log("All categories filtered.");
			allCatFiltered = true;
		}		
		
		$('.metal').parent().show();		
				
		if (nometal){$('.no-metal').parent().hide();}
		if (copper){$('.copper').parent().hide();}
		if (silver){$('.silver').parent().hide();}
		if (electrum){$('.electrum').parent().hide();}
		if (gold){$('.gold').parent().hide();}
		if (platinum){$('.platinum').parent().hide();}
		if (mithral){$('.mithral').parent().hide();}
		if (adamantine){$('.adamantine').parent().hide();}
	
		if (backgrounds){$('.backgrounds').parent().hide();}
		if (feats){$('.feats').parent().hide();}
		if (npcs){$('.npcs').parent().hide();}
		if (sidekicks){$('.sidekicks').parent().hide();}	
		if (races){$('.races').parent().hide();}	
		if (spells){$('.spells').parent().hide();}	
		if (mechanics){$('.mechanics').parent().hide();}	
		if (classes){$('.classes').parent().hide();}	
		if (items){$('.items').parent().hide();}	
		if (monsters){$('.monsters').parent().hide();}	
		if (adventures){$('.adventures').parent().hide();}	
	 	if (series){$('.series').parent().hide();}	
	 
	 	if (BOF){$('.bof').parent().hide();}	
		if (EA){$('.ea').parent().hide();}	
		if (CC){$('.cc').parent().hide();}	
		if (ME){$('.me').parent().hide();}	
		if (PP){$('.pp').parent().hide();}	
		if (AA){$('.aa').parent().hide();}	

	 	if (artificer){$('.artificer').parent().hide();}	
		if (barbarian){$('.barbarian').parent().hide();}	
		if (bard){$('.bard').parent().hide();}	
		if (cleric){$('.cleric').parent().hide();}	
		if (druid){$('.druid').parent().hide();}	
		if (fighter){$('.fighter').parent().hide();}	
		if (monk){$('.monk').parent().hide();}	
		if (paladin){$('.paladin').parent().hide();}	
		if (ranger){$('.ranger').parent().hide();}	
		if (rogue){$('.rogue').parent().hide();}	
		if (sorcerer){$('.sorcerer').parent().hide();}	
		if (warlock){$('.warlock').parent().hide();}	
		if (wizard){$('.wizard').parent().hide();}			
		
		if (allMetalsFiltered && allCatFiltered == false){
			if (!backgrounds){$('.backgrounds').parent().show();}
			if (!feats){$('.feats').parent().show();}
			if (!npcs){$('.npcs').parent().show();}
			if (!sidekicks){$('.sidekicks').parent().show();}	
			if (!races){$('.races').parent().show();}	
			if (!spells){$('.spells').parent().show();}	
			if (!mechanics){$('.mechanics').parent().show();}	
			if (!classes){$('.classes').parent().show();}	
			if (!items){$('.items').parent().show();}	
			if (!monsters){$('.monsters').parent().show();}	
			if (!adventures){$('.adventures').parent().show();}	
			if (!series){$('.series').parent().show();}
		}
		
		if (allMetalsFiltered){
			if (!artificer){$('.artificer').parent().show();}	
			if (!barbarian){$('.barbarian').parent().show();}	
			if (!bard){$('.bard').parent().show();}	
			if (!cleric){$('.cleric').parent().show();}	
			if (!druid){$('.druid').parent().show();}	
			if (!fighter){$('.fighter').parent().show();}	
			if (!monk){$('.monk').parent().show();}	
			if (!paladin){$('.paladin').parent().show();}	
			if (!ranger){$('.ranger').parent().show();}	
			if (!rogue){$('.rogue').parent().show();}	
			if (!sorcerer){$('.sorcerer').parent().show();}	
			if (!warlock){$('.warlock').parent().show();}	
			if (!wizard){$('.wizard').parent().show();}
		}			
 }

 
 function refresh(){	 
		console.log(
			"No-metal: " + nometal +
			" Copper: " + copper + 
			" Silver: " + silver + 
			" Electrum: " + electrum + 
			" Gold: " + gold + 
			" Platinum: " + platinum +
			" Mithral: " + mithral +
			" Adamantine: " + adamantine + 
			" Backgrounds: " + backgrounds +
			" Feats: " + feats + 
			" NPCs: " + npcs + 
			" Sidekicks: " + sidekicks +
			" Races: " + races + 
			" Spells: " + spells +
			" Mechanics: " + mechanics +
			" Classes: " + classes +
			" Items: "+ items + 
			" Monsters: " + monsters +
			" Adventures: " + adventures
		);
		
		$('.metal').parent().hide();		
				
		if (!nometal){$('.no-metal').parent().show();}
		if (!copper){$('.copper').parent().show();}
		if (!silver){$('.silver').parent().show();}
		if (!electrum){$('.electrum').parent().show();}
		if (!gold){$('.gold').parent().show();}
		if (!platinum){$('.platinum').parent().show();}
		if (!mithral){$('.mithral').parent().show();}
		if (!adamantine){$('.adamantine').parent().show();}
	
		if (!backgrounds){$('.backgrounds').parent().show();}
		if (!feats){$('.feats').parent().show();}
		if (!npcs){$('.npcs').parent().show();}
		if (!sidekicks){$('.sidekicks').parent().show();}	
		if (!races){$('.races').parent().show();}	
		if (!spells){$('.spells').parent().show();}	
		if (!mechanics){$('.mechanics').parent().show();}			
		if (!items){$('.items').parent().show();}	
		if (!monsters){$('.monsters').parent().show();}	
		if (!adventures){$('.adventures').parent().show();}	
		if (!classes){$('.classes').parent().show();}
	 	if (!series){$('.series').parent().show();}
		
	 	if (series){
			if (BOF){$('.bof').parent().show();}	
			if (EA){$('.ea').parent().show();}	
			if (CC){$('.cc').parent().show();}	
			if (ME){$('.me').parent().show();}	
			if (PP){$('.pp').parent().show();}	
			if (AA){$('.aa').parent().show();}	
		}
	 
		if (classes){
			if (!artificer){$('.artificer').parent().show();}	
			if (!barbarian){$('.barbarian').parent().show();}	
			if (!bard){$('.bard').parent().show();}	
			if (!cleric){$('.cleric').parent().show();}	
			if (!druid){$('.druid').parent().show();}	
			if (!fighter){$('.fighter').parent().show();}	
			if (!monk){$('.monk').parent().show();}	
			if (!paladin){$('.paladin').parent().show();}	
			if (!ranger){$('.ranger').parent().show();}	
			if (!rogue){$('.rogue').parent().show();}	
			if (!sorcerer){$('.sorcerer').parent().show();}	
			if (!warlock){$('.warlock').parent().show();}	
			if (!wizard){$('.wizard').parent().show();}						
		} 
 }
